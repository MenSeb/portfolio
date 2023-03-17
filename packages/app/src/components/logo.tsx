import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/logo';

export default function Logo(): JSX.Element {
  return (
    <Link className="logo" to=".">
      <img alt="React portfolio icon" className="logo-icon" src="logo.svg" />
      <span className="logo-text">WebFolio</span>
    </Link>
  );
}
