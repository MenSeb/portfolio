import * as React from 'react';
import { Label, Labelledby } from '../types';

export type ThemeIconProps = React.SVGProps<SVGSVGElement> & {
  description?: string;
  hidden?: boolean;
  title?: string;
  viewBox: string;
} & (Label | Labelledby);

export default function ThemeIcon({
  children,
  description,
  label,
  labelledby,
  title,
  viewBox,
  ...props
}: ThemeIconProps): JSX.Element {
  const hidden =
    description === undefined &&
    title === undefined &&
    label === undefined &&
    labelledby === undefined;

  return (
    <svg
      {...props}
      aria-hidden={hidden}
      aria-label={label}
      aria-labelledby={labelledby}
      focusable="false"
      role={hidden ? 'presentation' : 'img'}
      viewBox={viewBox}
    >
      {title ? <title>{title}</title> : null}
      {description ? <desc>{description}</desc> : null}
      {children}
    </svg>
  );
}
