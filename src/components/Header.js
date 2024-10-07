import React from 'react';
import './Header.css'; // for styling

const Header = () => (
  <header className="header">
    <h1 className="project-name">Resume Builder</h1>
    <div className="logo-container">
      <img src="https://cdn.dribbble.com/users/36126/screenshots/2228873/rb-logo.png" alt="Logo" className="logo" />
    </div>
  </header>
);

export default Header;