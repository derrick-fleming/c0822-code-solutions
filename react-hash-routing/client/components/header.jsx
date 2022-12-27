import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <div className="col px-0">
            {/* this anchor should go back to the catalog at '#' */}
            <Link to="/" className="navbar-brand">
              <i className="fa fa-dollar-sign" /> Wicked Sales
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
