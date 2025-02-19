import React from 'react';
import { Link, useLocation } from 'react-router-dom';
/**
 * component to represent the header of the page, note that all components are wrapped in header footer with routing
 * 
 * @returns jsx element for footer
 */
const Header = ({ webName, navLinks }) => {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar" style = {{backgroundColor: "#34495e"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{webName}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    to={link.path}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Header;