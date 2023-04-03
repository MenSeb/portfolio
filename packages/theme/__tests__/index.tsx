import * as React from 'react';
import {
  render,
  renderHook,
  screen,
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
  RenderResult,
  within,
} from '@testing-library/react';
import { useThemeContext, ThemeProvider } from '../src';
import { Theme, ThemeStore } from '../src/types';
import { ThemeProviderProps } from '../src/components/ThemeProvider';

export const spyAddEventListener = jest.fn();
export const spyRemoveEventListener = jest.fn();

export function defineMatchMedia() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: mockMatchMedia(),
  });
}

export function mockMatchMedia(mediaQuery?: string | string[]) {
  return jest.fn((query: string) => ({
    matches: mediaQuery === undefined ? false : mediaQuery.includes(query),
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: spyAddEventListener,
    removeEventListener: spyRemoveEventListener,
    dispatchEvent: jest.fn(),
  }));
}

export function renderThemeHook(
  options?: RenderHookOptions<ThemeProviderProps>,
): RenderHookResult<ThemeStore, ThemeProviderProps> {
  return renderHook(() => useThemeContext(), {
    ...options,
    wrapper: ThemeProvider,
  });
}

export function createRender(
  FC: React.ElementType,
  defaultProps?: object,
  options?: RenderOptions,
): (props?: object) => RenderResult {
  return (customProps) => {
    return render(<FC {...defaultProps} {...customProps} />, {
      ...options,
      wrapper: ThemeProvider,
    });
  };
}

export function getButton() {
  return screen.getByRole('button');
}

export function getIcon(hidden?: boolean) {
  return screen.getByRole('img', { hidden });
}

export function getIconPath() {
  return within(getIcon()).getByRole('presentation');
}

export function getAllIconPaths(hidden = true) {
  return screen.getAllByRole('presentation', { hidden });
}

export function getIconPaths(index = 0, hidden?: boolean) {
  return getAllIconPaths(hidden)[index];
}

export function getIconParent(theme: Theme, hidden?: boolean) {
  const icon = getAllIconPaths(hidden).find(
    (element) => element.parentElement?.dataset.theme === theme,
  );

  return icon === undefined ? null : icon.parentElement;
}

export function getIconDark(hidden?: boolean) {
  return getIconParent('dark', hidden);
}

export function getIconLight(hidden?: boolean) {
  return getIconParent('light', hidden);
}

beforeAll(() => defineMatchMedia());
beforeEach(() => localStorage.clear());
afterEach(() => {
  spyAddEventListener.mockReset();
  spyRemoveEventListener.mockReset();
});
