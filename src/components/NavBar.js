import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/steps">Steps</a></li>
        <li className="navbar-item"><a href="/create-resume">Create Resume</a></li>
        <li className="navbar-item"><a href="/contact">Contact</a></li>
        <li className="navbar-item"><a href="/help">Help</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;