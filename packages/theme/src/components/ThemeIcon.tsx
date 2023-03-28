import * as React from 'react';
import { useThemeContext } from '../';

export default function ThemeIcon({ ...props }): JSX.Element {
  const { theme } = useThemeContext();

  return (
    <svg {...props} aria-hidden="true" viewBox="-12 -12 24 24">
      <defs>
        <path
          id="light"
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
        <path
          id="dark"
          d="M0 -8 
          A 8 8 0 0 0 0 8 
          A 8 8 0 0 0 8 0 
          A 6 6 0 1 1 0 -8 z"
        />
      </defs>
      <use xlinkHref={`#${theme}`} />
    </svg>
  );
}
