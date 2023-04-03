import * as React from 'react';
import { useThemeContext } from '../';

export default function ThemeIconDark({
  children,
  ...props
}: React.SVGProps<SVGSVGElement>): JSX.Element {
  const { theme } = useThemeContext();

  return (
    <svg
      {...props}
      aria-hidden="true"
      data-theme="dark"
      data-hidden={theme === 'light'}
      focusable="false"
      viewBox="-12 -12 24 24"
    >
      {children}
      <path
        d="M0 -8 
          A 8 8 0 0 0 0 8 
          A 8 8 0 0 0 8 0 
          A 6 6 0 1 1 0 -8 z"
      />
    </svg>
  );
}
