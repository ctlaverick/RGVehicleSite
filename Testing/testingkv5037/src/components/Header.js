import React from 'react';
import logo from '../images/logo.png';
import '../App.css'

const Header = () => {
    return (
      <header className="header">
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </div>
  
        <nav className="nav center-nav">
          {['Home', 'About', 'Services', 'Contact'].map((option) => (
            <a
              key={option}
              href={option}
              className="nav-link enhanced"
            >
              {option}
            </a>
          ))}
        </nav>
      </header>
    );
  };
  
  export default Header;