import { act, renderHook } from '@testing-library/react';
import {
  defaultTheme,
  useThemeContext,
  ErrorThemeContext,
  ThemeProvider,
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

  it('renders with the default theme as the active theme', () => {
    const { result } = renderThemeHook();

    expect(result.current.theme.active).toBe(defaultTheme);
  });

  it('renders with a function to toggle between themes', () => {
    const { result } = renderThemeHook();
    const { theme, toggleTheme } = result.current;

    act(() => toggleTheme());

    expect(result.current.theme.active).toBe(theme.inactive);
    expect(result.current.theme.inactive).toBe(theme.active);
  });
});
