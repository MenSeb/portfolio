import * as React from 'react';
import { useThemeContext } from '../';

export default function ThemeIconLight({
  children,
  ...props
}: React.SVGProps<SVGSVGElement>): JSX.Element {
  const { theme } = useThemeContext();

  return (
    <svg
      {...props}
      aria-hidden="true"
      data-theme="light"
      data-hidden={theme === 'dark'}
      focusable="false"
      viewBox="-12 -12 24 24"
    >
      {children}
      <path
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
    </svg>
  );
}
