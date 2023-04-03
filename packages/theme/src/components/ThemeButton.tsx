import * as React from 'react';
import { Label, Labelledby } from '../types';

export type ThemeButtonProps = React.HTMLProps<HTMLButtonElement> & {
  click: () => void;
  pressed: boolean;
  title?: string;
} & (Label | Labelledby);

export default function ThemeButton({
  children,
  click,
  label,
  labelledby,
  pressed,
  title,
  ...props
}: ThemeButtonProps): JSX.Element {
  return (
    <button
      {...props}
      aria-label={label}
      aria-labelledby={labelledby}
      aria-live="polite"
      aria-pressed={pressed}
      onClick={click}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}
