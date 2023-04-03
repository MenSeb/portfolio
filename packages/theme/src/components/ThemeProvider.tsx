import * as React from 'react';
import { Theme } from '../types';
import { ThemeContext } from '../context';
import {
  THEME_DEFAULT,
  THEME_QUERY_DARK,
  THEME_STORAGE_KEY,
} from '../constants';

export type ThemeProviderProps = React.PropsWithChildren & {
  defaultTheme?: Theme;
};

export default function ThemeProvider({
  children,
  defaultTheme = THEME_DEFAULT,
}: ThemeProviderProps): JSX.Element {
  const refMediaQuery = React.useRef(window.matchMedia(THEME_QUERY_DARK));

  const [theme, setTheme] = React.useState<Theme>(() => {
    const theme = localStorage.getItem(THEME_STORAGE_KEY);

    if (theme === 'light' || theme === 'dark') return theme;

    return refMediaQuery.current.matches ? 'dark' : 'light';
  });

  const setThemeDark = React.useCallback(() => setTheme('dark'), []);
  const setThemeLight = React.useCallback(() => setTheme('light'), []);

  const toggleTheme = React.useCallback(() => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }, []);

  React.useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  React.useEffect(() => {
    function updateTheme() {
      setTheme(refMediaQuery.current.matches ? 'dark' : 'light');
    }

    const { current: mediaQuery } = refMediaQuery;

    mediaQuery.addEventListener('change', updateTheme);

    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        defaultTheme,
        setThemeDark,
        setThemeLight,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
