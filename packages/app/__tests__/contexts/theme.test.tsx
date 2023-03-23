import { act, renderHook } from '@testing-library/react';
import {
  useThemeContext,
  ErrorThemeContext,
  ThemeProvider,
  THEME_QUERY_DARK,
  THEME_STORAGE_KEY,
} from '../../src/contexts';

function renderThemeHook() {
  return renderHook(() => useThemeContext(), { wrapper: ThemeProvider });
}

describe('Context Theme', () => {
  beforeEach(() => localStorage.clear());

  it('throws when used without theme provider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      renderHook(() => useThemeContext());
    }).toThrow(ErrorThemeContext);

    spy.mockRestore();
  });

  it('loads the theme in local storage', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderThemeHook();

    expect(result.current.theme).toBe('dark');
  });

  it('loads the user color scheme preference', () => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: query.includes(THEME_QUERY_DARK),
    }));

    const { result } = renderThemeHook();

    expect(result.current.theme).toBe('dark');
  });

  it('renders with the default theme', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
    }));

    const { result } = renderThemeHook();

    expect(result.current.theme).toEqual('light');
  });

  it('renders with a function to toggle between themes', () => {
    const { result } = renderThemeHook();

    expect(result.current.theme).toEqual('light');

    act(() => result.current.toggleTheme());

    expect(result.current.theme).toEqual('dark');
  });

  it('saves the theme in local storage on the initial render', () => {
    renderThemeHook();

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toEqual('light');
  });

  it('saves the theme in local storage on theme toggle', () => {
    const { result } = renderThemeHook();

    act(() => result.current.toggleTheme());

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toEqual('dark');
  });
});
