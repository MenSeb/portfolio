import * as React from 'react';
import { useThemeContext } from '../';

export default function ThemeButtonToggle({
  children,
  ...props
}: React.HTMLProps<HTMLButtonElement>): JSX.Element {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      {...props}
      aria-pressed={theme === 'dark'}
      data-theme={theme}
      onClick={toggleTheme}
      type="button"
    >
      {children}
    </button>
  );
}
