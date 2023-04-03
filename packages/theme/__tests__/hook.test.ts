import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { renderThemeHook } from '.';
import { ThemeProvider, useThemeContext } from '../src';
import { ThemeContext } from '../src/context';
import { THEME_CONTEXT_ERROR } from '../src/constants';

describe('useThemeContext', () => {
  it('throws when used without provider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      renderHook(() => useThemeContext());
    }).toThrow(THEME_CONTEXT_ERROR);

    spy.mockRestore();
  });

  it('returns the context for theme', () => {
    const { result: resultHookContext } = renderHook(
      () => React.useContext(ThemeContext),
      { wrapper: ThemeProvider },
    );

    const { result: resultHookTheme } = renderThemeHook();

    expect(JSON.stringify(resultHookContext.current)).toStrictEqual(
      JSON.stringify(resultHookTheme.current),
    );
  });
});
