import { act, renderHook } from '@testing-library/react';
import {
  useThemeContext,
  ErrorThemeContext,
  ThemeProvider,
  THEME_STORAGE_KEY,
} from '../../src/contexts';

function renderThemeHook() {
  return renderHook(() => useThemeContext(), { wrapper: ThemeProvider });
}

describe('Context Theme', () => {
  it('throws when used without theme provider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      renderHook(() => useThemeContext());
    }).toThrow(ErrorThemeContext);

    spy.mockRestore();
  });

  it('loads with the theme in local storage', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderThemeHook();

    expect(result.current.theme).toBe('dark');

    localStorage.clear();
  });

  it('renders with the initial theme state', () => {
    const { result } = renderThemeHook();

    expect(result.current.theme).toEqual('light');
  });

  it('renders with a function to toggle between themes', () => {
    const { result } = renderThemeHook();

    expect(result.current.theme).toEqual('light');

    act(() => result.current.toggleTheme());

    expect(result.current.theme).toEqual('dark');
  });
});
