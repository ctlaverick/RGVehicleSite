import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-Primary text-white p-4'>
      <div className='flex items-center'>
        <img src={logo} alt='Logo' className='h-24 w-24' />
      </div>
      <nav className='flex flex-1 justify-center gap-8'>
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/About' },
          { name: 'Services', path: '/Services' },
          { name: 'Contact', path: '/Contact' }
        ].map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className='text-Admin-Text font-bold text-lg uppercase cursor-pointer transition duration-300 hover:text-Secondary'
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
