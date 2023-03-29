import * as React from 'react';
import { useThemeContext } from '../';

export default function ThemeButton({
  children,
  ...props
}: React.PropsWithChildren): JSX.Element {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      {...props}
      aria-label={theme}
      aria-live="polite"
      onClick={toggleTheme}
      title="Toggle light and dark theme"
    >
      {children}
    </button>
  );
}
