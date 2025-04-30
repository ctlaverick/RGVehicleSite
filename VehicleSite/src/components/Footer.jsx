import React from 'react';
import logo from '../images/logo.png';
import MainButton from './MainButton';

const Footer = () => {
  const FooterHeadings = [
    { name: 'Contact us', path: '/contact' },
    { name: 'Privacy policy', path: '/privacy-policy' },
    { name: 'About us', path: '/about' },
    { name: 'Cookie policy', path: '/cookie-policy' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Terms of service', path: '/terms-of-service' },
    { name: 'News', path: '/news' },
    { name: 'Terms and conditions', path: '/terms-and-conditions' },
    { name: 'Subscriptions', path: '/subscriptions' },
    { name: 'Accessibility', path: '/accessibility' }
  ];

  return (
    <footer className='bg-primary text-admin-text p-6 grid grid-cols-5 gap-4 text-left'>
      <img src={logo} alt='Logo' className='h-24 w-24 col-start-1 col-span-1' />
      <div className='grid grid-cols-2 col-start-2 col-span-2'>
        {FooterHeadings.map(({ name, path }) => (
          <div key={name} className='col-span-1'>
            <a href={path} className='text-admin-text text-lg hover:text-secondary'>
              {name}
            </a>
          </div>
        ))}
      </div>
      <div className='col-start-5 col-span-1'>
        <h1 className='font-bold mb-2'>Join our newsletter!</h1>
        <input type="text" className="w-full p-2 text-sm rounded-lg text-text bg-admin-background" placeholder="Enter Email address"/>
        <MainButton text='Submit'/>
      </div>
    </footer>
  );
};

export default Footer;