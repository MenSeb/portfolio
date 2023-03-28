import * as React from 'react';
import ThemeContext from '../contexts';
import { Theme } from '../types';
import { THEME_QUERY_DARK, THEME_STORAGE_KEY } from '../constants';

export default function ThemeProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const refMediaQuery = React.useRef(window.matchMedia(THEME_QUERY_DARK));

  const [theme, setTheme] = React.useState<Theme>(() => {
    const theme = localStorage.getItem(THEME_STORAGE_KEY);

    if (theme === 'light' || theme === 'dark') return theme;

    return refMediaQuery.current.matches ? 'dark' : 'light';
  });

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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
