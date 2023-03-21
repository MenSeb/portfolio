import * as React from 'react';

type Theme = 'light' | 'dark';

type ThemeState = {
  active: Theme;
  inactive: Theme;
};

type ThemeToggle = () => void;

type ThemeStore = {
  theme: ThemeState;
  toggleTheme: ThemeToggle;
};

type ThemeContext = ThemeStore | undefined;

export const defaultTheme: Theme = 'light';

export const ContextTheme: React.Context<ThemeContext> =
  React.createContext<ThemeContext>(undefined);

export const ErrorThemeContext = new Error(
  'useThemeContext should be used within ThemeProvider.',
);

export function useThemeContext(): ThemeStore {
  const context = React.useContext<ThemeContext>(ContextTheme);

  if (context === undefined) throw ErrorThemeContext;

  return context;
}

export function ThemeProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const [theme, setTheme] = React.useState<ThemeState>({
    active: defaultTheme,
    inactive: defaultTheme === 'light' ? 'dark' : 'light',
  });

  const toggleTheme = React.useCallback<ThemeToggle>(() => {
    setTheme((theme) => ({
      active: theme.inactive,
      inactive: theme.active,
    }));
  }, []);

  return (
    <ContextTheme.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContextTheme.Provider>
  );
}
