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

export function getIcon(container: HTMLElement) {
  return container.querySelector('svg');
}

export function getIconPath(container: HTMLElement) {
  return getIcon(container)?.querySelector('path');
}

beforeEach(() => localStorage.clear());
