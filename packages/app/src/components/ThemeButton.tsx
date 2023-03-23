import * as React from 'react';
import { useThemeContext } from '../contexts';

type ThemeButtonProps = React.PropsWithChildren;

export default function ThemeButton({
  children,
  ...props
}: ThemeButtonProps): JSX.Element {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      {...props}
      aria-label={theme.active}
      aria-live="polite"
      className="theme-button"
      onClick={toggleTheme}
      title="Toggle light and dark theme"
    >
      {children}
    </button>
  );
}
