import * as React from 'react';

type LogoProps = {
  title: string;
  path: string;
};

export default function Logo({ title, path, ...props }: LogoProps) {
  return (
    <div {...props}>
      <img alt={`${title} icon`} src={path} />
      <h1>{title}</h1>
    </div>
  );
}
