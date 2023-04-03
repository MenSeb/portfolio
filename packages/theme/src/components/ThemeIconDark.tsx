import * as React from 'react';
import { useThemeContext } from '../';
import ThemeIcon, { ThemeIconProps } from './ThemeIcon';

export default function ThemeIconDark(
  props: Partial<ThemeIconProps>,
): JSX.Element {
  const { theme } = useThemeContext();

  return (
    <ThemeIcon
      {...props}
      data-theme="dark"
      data-hidden={theme === 'light'}
      viewBox="-12 -12 24 24"
    >
      <path
        role="presentation"
        d="M0 -8 
          A 8 8 0 0 0 0 8 
          A 8 8 0 0 0 8 0 
          A 6 6 0 1 1 0 -8 z"
      />
    </ThemeIcon>
  );
}
