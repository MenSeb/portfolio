import { act, renderHook } from '@testing-library/react';
import { useThemeContext } from '../src';
import {
  THEME_CONTEXT_ERROR,
  THEME_QUERY_DARK,
  THEME_STORAGE_KEY,
} from '../src/constants';
import {
  defineMatchMedia,
  mockMatchMedia,
  renderThemeHook,
  spyAddEventListener,
  spyRemoveEventListener,
} from '.';

describe('Context Theme', () => {
  beforeAll(() => defineMatchMedia());
  beforeEach(() => localStorage.clear());
  afterEach(() => {
    spyAddEventListener.mockReset();
    spyRemoveEventListener.mockReset();
  });

  it('throws when used without theme provider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      renderHook(() => useThemeContext());
    }).toThrow(THEME_CONTEXT_ERROR);

    spy.mockRestore();
  });

  it('loads the theme in local storage', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderThemeHook();

    expect(result.current.theme).toBe('dark');
  });

  it('loads the user color scheme preference', () => {
    jest
      .spyOn(window, 'matchMedia')
      .mockImplementationOnce(mockMatchMedia(THEME_QUERY_DARK));

    const { result } = renderThemeHook();

    expect(result.current.theme).toBe('dark');
  });

  it('renders with the default theme', () => {
    const { result } = renderThemeHook();

    expect(result.current.theme).toEqual('light');
  });

  it('renders with a function to toggle between themes', () => {
    const { result } = renderThemeHook();

    expect(result.current.theme).toEqual('light');

    act(() => result.current.toggleTheme());

    expect(result.current.theme).toEqual('dark');

    act(() => result.current.toggleTheme());

    expect(result.current.theme).toEqual('light');
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

  it('listens to the user color scheme change event', () => {
    const { unmount } = renderThemeHook();

    expect(spyAddEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );

    unmount();

    expect(spyRemoveEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );
  });

  // to implement the next tests, try to trigger the onchange event
  // on the MediaQueryList, maybe using DispatchEvent?
  // 'updates the theme when the user color scheme change'
  // 'saves the theme when the user color scheme change'
});
