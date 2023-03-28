import { renderHook } from '@testing-library/react';
import { useThemeContext, ThemeProvider } from '../src';

export const spyAddEventListener = jest.fn();
export const spyRemoveEventListener = jest.fn();

export function defineMatchMedia() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: mockMatchMedia(),
  });
}

export function mockMatchMedia(mediaQuery?: string) {
  return jest.fn((query: string) => ({
    matches: mediaQuery ? query.includes(mediaQuery) : false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: spyAddEventListener,
    removeEventListener: spyRemoveEventListener,
    dispatchEvent: jest.fn(),
  }));
}

export function renderThemeHook() {
  return renderHook(() => useThemeContext(), { wrapper: ThemeProvider });
}
