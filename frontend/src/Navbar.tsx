import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/podcasts">My Podcasts</Link>
          </li>
          <li>
            <Link to="/movies">My Movies</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
