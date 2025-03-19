import React from 'react';
import logo from '../images/logo.png';
import '../index.css'

const Header = () => {
    return (
      <header className="flex items-center justify-between bg-Primary text-white p-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-24"
          />
        </div>
        <nav className="flex flex-1 justify-center gap-8">
          {['Home', 'About', 'Services', 'Contact'].map((option) => (
            <a
              key={option}
              href={option.replace(/\s/g, '-')}
              className="text-Secondary font-bold text-lg uppercase cursor-pointer transition duration-300 hover:text-Alerts"
            >
              {option}
            </a>
          ))}
        </nav>
      </header>
    );
};

export default Header;