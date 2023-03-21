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

export const defaultTheme: Theme = 'light';

export const ThemeContext: React.Context<ThemeStore> =
  React.createContext<ThemeStore>({} as ThemeStore);

export function useThemeContext(): ThemeStore {
  return React.useContext<ThemeStore>(ThemeContext);
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
