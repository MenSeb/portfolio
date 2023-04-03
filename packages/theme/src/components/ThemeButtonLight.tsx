import * as React from 'react';
import { useThemeContext } from '../';
import { ThemeButton } from '.';
import { ThemeButtonProps } from '../types';

export type ThemeButtonLightProps = Partial<ThemeButtonProps>;

export default function ThemeButtonLight({
  children,
  ...props
}: ThemeButtonLightProps): JSX.Element {
  const { theme, setThemeLight } = useThemeContext();

  return (
    <ThemeButton
      {...props}
      click={setThemeLight}
      data-theme="light"
      pressed={theme === 'light'}
    >
      {children}
    </ThemeButton>
  );
}
