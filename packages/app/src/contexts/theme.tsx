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

export function useThemeContext(): ThemeStore {
  const context = React.useContext(ContextTheme);

  if (context) return context;

  throw ErrorThemeContext;
}

export function ThemeProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const [theme, setTheme] = React.useState<Theme>('light');

  const toggleTheme = React.useCallback(() => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ContextTheme.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContextTheme.Provider>
  );
}
