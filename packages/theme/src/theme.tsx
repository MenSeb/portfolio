import * as React from 'react';

type Theme = 'light' | 'dark';

type ThemeStore = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ContextTheme = React.createContext<ThemeStore | null>(null);

export const ErrorThemeContext = new Error(
  'useThemeContext should be used within ThemeProvider.',
);

export const THEME_STORAGE_KEY = 'color-scheme';

export const THEME_QUERY_DARK = '(prefers-color-scheme: dark)';

export function useThemeContext(): ThemeStore {
  const context = React.useContext(ContextTheme);

  if (context) return context;

  throw ErrorThemeContext;
}

export function ThemeProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const refMediaQuery = React.useRef(window.matchMedia(THEME_QUERY_DARK));

  const [theme, setTheme] = React.useState<Theme>(() => {
    const theme = localStorage.getItem(THEME_STORAGE_KEY);

    if (theme) return theme as Theme;

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
    <ContextTheme.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContextTheme.Provider>
  );
}
