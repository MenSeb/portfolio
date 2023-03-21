import * as React from 'react';

type Theme = 'light' | 'dark';

type ThemeToggle = () => void;

type ThemeStore = {
  theme: Theme;
  toggleTheme: ThemeToggle;
};

export const defaultTheme: Theme = 'light';

export const ThemeContext = React.createContext<ThemeStore>({} as ThemeStore);

export function useThemeContext(): ThemeStore {
  return React.useContext<ThemeStore>(ThemeContext);
}

export function ThemeProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const toggleTheme = React.useCallback<ThemeToggle>(() => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
