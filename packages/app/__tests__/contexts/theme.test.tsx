import { act, renderHook } from '@testing-library/react';
import {
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
