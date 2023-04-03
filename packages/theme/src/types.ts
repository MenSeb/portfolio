export type Theme = 'light' | 'dark';

export type ThemeStore = {
  theme: Theme;
  setThemeDark: () => void;
  setThemeLight: () => void;
  toggleTheme: () => void;
};

export type Label = {
  label?: string;
  labelledby?: never;
};

export type Labelledby = {
  label?: never;
  labelledby?: string;
};
