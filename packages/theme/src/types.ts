export type Theme = 'light' | 'dark';

export type ThemeStore = {
  theme: Theme;
  setThemeDark: () => void;
  setThemeLight: () => void;
  toggleTheme: () => void;
};
