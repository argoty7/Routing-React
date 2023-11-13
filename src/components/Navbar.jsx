import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/publicaciones" activeClassName="active-link">Lista de publicaciones</NavLink>
        </li>
      </ul>
    </nav>
  );
}