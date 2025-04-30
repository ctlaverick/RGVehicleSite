import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import MainButton from './MainButton';

const Header = ({ user }) => {
  const HeaderHeadings = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Subscription Vehicles', path: '/subscriptions' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className='flex items-center justify-between bg-primary text-white p-4 shadow-md'>
      <div className='flex items-center'>
        <img src={logo} alt='Logo' className='h-16 w-16 object-contain' />
      </div>
      <nav className='flex flex-1 justify-center gap-6 px-4'>
        {HeaderHeadings.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className='font-bold text-lg uppercase transition duration-300 hover:text-secondary'
          >
            {name}
          </Link>
        ))}
        {user && user.isAdmin && (
          <Link 
            key="Admin"
            to="/admin"
            className="font-bold text-lg uppercase transition duration-300 hover:text-secondary"
          >
            Admin
          </Link>
        )}
      </nav>
      <div className='flex items-center gap-4'>
        {user ? (
          <Link to='/account'>
            <MainButton text='Account'/>
          </Link>
        ) : (
          <>
            <Link to='/signup'>
              <MainButton text='Signup'/>
            </Link>
            <Link to='/login'>
              <MainButton text='Login'/>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;