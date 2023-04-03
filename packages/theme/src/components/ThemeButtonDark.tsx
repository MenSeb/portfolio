import * as React from 'react';
import { useThemeContext } from '../';

export default function ThemeButtonDark({
  children,
  ...props
}: React.HTMLProps<HTMLButtonElement>): JSX.Element {
  const { theme, setThemeDark } = useThemeContext();

  return (
    <button
      {...props}
      aria-pressed={theme === 'dark'}
      data-theme="dark"
      onClick={setThemeDark}
      type="button"
    >
      {children}
    </button>
  );
}
