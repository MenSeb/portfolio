import * as React from 'react';
import ThemeContext from '../contexts';
import { ThemeStore } from '../types';
import { THEME_CONTEXT_ERROR } from '../constants';

export default function useThemeContext(): ThemeStore {
  const context = React.useContext(ThemeContext);

  if (context !== null) return context;

  throw new Error(THEME_CONTEXT_ERROR);
}
