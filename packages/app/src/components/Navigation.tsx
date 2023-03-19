import * as React from 'react';
import { NavLink } from 'react-router-dom';

type NavigationProps = {
  id?: string;
};

export default function Navigation({ id }: NavigationProps) {
  return (
    <nav className="navigation" id={id}>
      <NavLink className="navigation-link" to=".">
        Home
      </NavLink>
      <NavLink className="navigation-link" to="about">
        About
      </NavLink>
      <NavLink className="navigation-link" to="skills">
        Skills
      </NavLink>
      <NavLink className="navigation-link" to="studies">
        Studies
      </NavLink>
      <NavLink className="navigation-link" to="works">
        Works
      </NavLink>
    </nav>
  );
}
