import * as React from 'react';
import { useThemeContext } from '../';
import { ThemeButton } from '.';
import { ThemeButtonProps } from '../types';

export type ThemeButtonDarkProps = Partial<ThemeButtonProps>;

export default function ThemeButtonDark({
  children,
  ...props
}: ThemeButtonDarkProps): JSX.Element {
  const { theme, setThemeDark } = useThemeContext();

  return (
    <ThemeButton
      {...props}
      click={setThemeDark}
      data-theme="dark"
      pressed={theme === 'dark'}
    >
      {children}
    </ThemeButton>
  );
}
