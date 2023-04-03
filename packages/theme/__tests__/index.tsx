import * as React from 'react';
import {
  render,
  renderHook,
  screen,
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { useThemeContext, ThemeProvider } from '../src';
import { ThemeStore } from '../src/types';
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
  return getIconPath(hidden).closest('svg');
}

export function getIconPath(hidden = true) {
  return screen.getByRole('presentation', { hidden });
}

export function getImage() {
  return screen.getByRole('img');
}

beforeAll(() => defineMatchMedia());
beforeEach(() => localStorage.clear());
afterEach(() => {
  spyAddEventListener.mockReset();
  spyRemoveEventListener.mockReset();
});
