import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
  const headings = [
    'Contact us', 'Privacy policy', 'About us', 'Cookie policy', 'FAQ',
    'Terms of service', 'News', 'Terms and conditions', 'Subscriptions', 'Accessibility'
  ];

  return (
    <footer className='bg-primary text-admin-text p-6 grid grid-cols-5 gap-4 text-left'>
    <img src={logo} alt='Logo' className='h-24 w-24 col-start-1 col-span-1' />
    
    <div className='grid grid-cols-2 col-start-2 col-span-2'>
      {headings.map((option) => (
        <div key={option} className='col-span-1'>
          <a href={option.replace(/\s/g, '-')} className='text-admin-text text-lg hover:text-secondary'>
            {option}
          </a>
        </div>
      ))}
    </div>
    
    <div className='col-start-5 col-span-1'>
      <h1 className='font-bold mb-2'>Join our newsletter!</h1>
      <input type="text" className="w-full p-2 text-sm rounded-lg text-text bg-admin-background" placeholder="Enter Email address"/>
      <button className="mt-2 w-full bg-success text-admin-text py-2 px-4 rounded-lg">
        Enter
      </button>
    </div>
  </footer>
  );
};

export default Footer;