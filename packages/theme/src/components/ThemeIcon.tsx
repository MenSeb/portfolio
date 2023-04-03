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
  hidden,
  label,
  labelledby,
  title,
  viewBox,
  ...props
}: ThemeIconProps): JSX.Element {
  const defaultHidden =
    description === undefined &&
    title === undefined &&
    label === undefined &&
    labelledby === undefined;

  const isHidden = hidden === undefined ? defaultHidden : hidden;

  return (
    <svg
      {...props}
      aria-hidden={isHidden}
      aria-label={label}
      aria-labelledby={labelledby}
      focusable="false"
      role={isHidden ? undefined : 'img'}
      viewBox={viewBox}
    >
      {title ? <title>{title}</title> : null}
      {description ? <desc>{description}</desc> : null}
      {children}
    </svg>
  );
}
