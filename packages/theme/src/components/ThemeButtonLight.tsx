import * as React from 'react';
import { useThemeContext } from '../';

export default function ThemeButtonLight({
  children,
  ...props
}: React.HTMLProps<HTMLButtonElement>): JSX.Element {
  const { theme, setThemeLight } = useThemeContext();

  return (
    <button
      {...props}
      aria-pressed={theme === 'light'}
      data-theme="light"
      onClick={setThemeLight}
      type="button"
    >
      {children}
    </button>
  );
}
