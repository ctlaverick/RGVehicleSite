import React from 'react';
import '../App.css';

const Footer = () => {
  
  // Subheadings for each option
  const subheadings = {
    'Privacy policy': ['Overview', 'Data Collection', 'User Rights'],
    'Terms of service': ['General Terms', 'Usage Policy', 'Liability'],
    'Contact us': ['Support', 'Feedback', 'Sales Inquiry'],
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          {['Privacy policy', 'Terms of service', 'Contact us'].map((option) => (
            <div key={option}>
              <a href={option.replace(/\s/g, '-')}>
                {option}
              </a>
              <br />
              {subheadings[option].map((subheading) => (
                <div key={subheading}>
                  <a href={subheading.replace(/\s/g, '-')}>
                    {subheading}
                  </a>
                  <br />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;