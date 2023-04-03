import * as React from 'react';
import { useThemeContext } from '../';
import ThemeButton, { ThemeButtonProps } from './ThemeButton';

export type ThemeButtonToggleProps = Partial<ThemeButtonProps>;

export default function ThemeButtonToggle({
  children,
  ...props
}: ThemeButtonToggleProps): JSX.Element {
  const { defaultTheme, theme, toggleTheme } = useThemeContext();

  return (
    <ThemeButton
      {...props}
      click={toggleTheme}
      data-theme={theme}
      pressed={theme !== defaultTheme}
    >
      {children}
    </ThemeButton>
  );
}
