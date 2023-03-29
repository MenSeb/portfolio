import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeButton, ThemeIcon } from '@menseb/theme';
import { Navigation } from '../components';

export default function Header() {
  return (
    <header>
      <Link to=".">
        <img alt="WebFolio icon" src="logo.svg" />
        <h1>WebFolio</h1>
      </Link>
      <Navigation label="primary">
        <NavLink to=".">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="cv">CV</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </Navigation>
      <ThemeButton>
        <ThemeIcon />
      </ThemeButton>
    </header>
  );
}
