import * as React from 'react';

type NavigationLabel = {
  label: string;
  labelledby?: never;
};

type NavigationLabelledby = {
  label?: never;
  labelledby: string;
};

type NavigationProps = (NavigationLabel | NavigationLabelledby) & {
  children: React.ReactElement[];
};

export default function Navigation({
  children,
  label,
  labelledby,
  ...props
}: NavigationProps) {
  return (
    <nav {...props} aria-label={label} aria-labelledby={labelledby}>
      <ul>
        {React.Children.map(children, (child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </nav>
  );
}
