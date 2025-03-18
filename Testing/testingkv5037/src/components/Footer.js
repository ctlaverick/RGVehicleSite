import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
        {['Privacy policy', 'Terms of service', 'Contact us'].map((option) => (
            <a
              key={option}
              href={option.replace(/\s/g, '-')}
            >
              {option}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;