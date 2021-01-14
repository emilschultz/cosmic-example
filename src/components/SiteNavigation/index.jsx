import React from 'react';
import { Link } from 'react-router-dom';

function SiteNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/om-meg">Om meg</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SiteNavigation;