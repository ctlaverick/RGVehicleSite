import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

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

const CarOption = ({ name, image }) => {
    return (
      <div className="flex flex-col items-center w-1/5 p-2 border border-gray-300 rounded-lg shadow-md">
        <img
          src={image}
          alt={name}
          className="object-cover border-b-2 border-gray-300 rounded-md"
        />
        <div className="flex justify-between items-center w-full p-2">
          <span className="text-sm text-gray-700">{name}</span>
          <button className="bg-success text-admin-text py-2 px-4 rounded-lg hover:bg-green-600">
            Select
          </button>
        </div>
      </div>
    );
  };

export { Header, Footer, CarOption };