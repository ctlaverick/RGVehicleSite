import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../index.css';

const Header = () => {
  const headings = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Services', path: '/Services' },
    { name: 'Contact', path: '/Contact' }
  ];

  return (
    <header className='flex items-center justify-between bg-primary text-white p-4 shadow-md'>
      <div className='flex items-center'>
        <img src={logo} alt='Logo' className='h-16 w-16 object-contain' />
      </div>
      <nav className='flex flex-1 justify-center gap-6 px-4'>
        {headings.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className='font-bold text-lg uppercase transition duration-300 hover:text-secondary'
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;