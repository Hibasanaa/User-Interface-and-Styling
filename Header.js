import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">Book Recs</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/recommendations">Recommendations</a>
      </nav>
    </header>
  );
};

export default Header;
