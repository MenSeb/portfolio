import * as React from 'react';
import { useThemeContext } from '../';

type ThemeButtonLabel = {
  label: string;
  labelledby?: never;
};

type ThemeButtonLabelledby = {
  label?: never;
  labelledby: string;
};

type ThemeButtonProps = React.HTMLProps<HTMLButtonElement> & {
  title?: string;
} & (ThemeButtonLabel | ThemeButtonLabelledby);

export default function ThemeButton({
  children,
  label,
  labelledby,
  title,
  ...props
}: ThemeButtonProps): JSX.Element {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      {...props}
      aria-label={label}
      aria-labelledby={labelledby}
      aria-live="polite"
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}
