import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Watchlist = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <li
      className="nav-item dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="/watchlist"
        className="nav-link dropdown-toggle"
        role="button"
        aria-expanded={isDropdownOpen ? 'true' : 'false'}
      >
        Watchlist
      </Link>
      <ul
        className={`dropdown-menu small ${isDropdownOpen ? 'show' : ''}`}
        aria-labelledby="navbarDropdown"
      >
        <li>
          <Link className="dropdown-item" to="#">
            First item
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Second item
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Third item
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Watchlist;
