import React from 'react';
import { NavLink } from 'react-router-dom';

function SiteNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Hjem</NavLink>
        </li>
        <li>
          <NavLink to="/om-meg">Om meg</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SiteNavigation;