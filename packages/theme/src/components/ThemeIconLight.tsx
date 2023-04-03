import * as React from 'react';
import { useThemeContext } from '../';
import ThemeIcon, { ThemeIconProps } from './ThemeIcon';

export default function ThemeIconLight(
  props: Partial<ThemeIconProps>,
): JSX.Element {
  const { theme } = useThemeContext();

  return (
    <ThemeIcon
      {...props}
      data-theme="light"
      data-hidden={theme === 'dark'}
      viewBox="-12 -12 24 24"
    >
      <path
        role="presentation"
        d="M-10 0 
          A 5 5 0 0 0 -7 -7 
          A 5 5 0 0 0 0 -10 
          A 5 5 0 0 0 7 -7 
          A 5 5 0 0 0 10 0 
          A 5 5 0 0 0 7 7 
          A 5 5 0 0 0 0 10 
          A 5 5 0 0 0 -7 7 
          A 5 5 0 0 0 -10 0 z
          M-6 0 a 6 6 0 0 0 12 0 a 6 6 0 0 0 -12 0 z
          M-5 0 a 5 5 0 0 0 10 0 a 5 5 0 0 0 -10 0 z"
      />
    </ThemeIcon>
  );
}
