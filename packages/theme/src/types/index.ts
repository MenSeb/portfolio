export type Theme = 'light' | 'dark';

export type ThemeStore = {
  theme: Theme;
  toggleTheme: () => void;
};
