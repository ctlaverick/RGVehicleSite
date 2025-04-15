import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Header = () => {
    const HeaderHeadings = [
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
          {HeaderHeadings.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className='font-bold text-lg uppercase transition duration-300 hover:text-secondary'
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-4'>
          <Link to='/signup'>
            <button className='bg-success text-admin-text py-2 px-4 rounded-lg hover:bg-green-600 hover:text-secondary transition duration-300'>
              Sign Up
            </button>
          </Link>
          <Link to='/login'>
            <button className='bg-success text-admin-text py-2 px-4 rounded-lg hover:bg-green-600 hover:text-secondary transition duration-300'>
              Login
            </button>
          </Link>
        </div>
      </header>
    );
  };

const Footer = () => {
  const FooterHeadings = [
    { name: 'Contact us', path: '/contact-us' },
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

const CarOption = ({ name, image, stats }) => {
  return (
    <div className="flex flex-col items-center w-1/5 p-2 border border-gray-300 rounded-lg shadow-md">
      <div className="relative w-full">
        <div className="absolute top-2 left-2 flex gap-1 z-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-primary text-admin-text text-[10px] flex items-center justify-center rounded-sm"
            >
              {stat}
            </div>
          ))}
        </div>

        <img
          src={image}
          alt={name}
          className="w-full object-cover border-b-2 border-gray-300 rounded-md"
        />
      </div>

      <div className="flex justify-between items-center w-full p-2">
        <span className="text-sm text-gray-700">{name}</span>
        <MainButton text="Select" />
      </div>
    </div>
  );
};

  const MainButton = ({ text }) => {
    return (
      <button className="bg-success text-admin-text py-2 px-4 rounded-lg hover:bg-green-600 hover:text-secondary cursor-pointer mt-2">
            {text}
      </button>
    )
  }
  
  const FaqDropdown = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAnswer = () => setIsOpen(!isOpen);
  
    return (
      <div className="mb-4">
        <button
          onClick={toggleAnswer}
          className="w-full text-left text-lg font-semibold bg-gray-200 p-4 rounded-lg hover:bg-gray-300 focus:outline-none"
        >
          {question}
        </button>
        {isOpen && (
          <div className="mt-2 text-gray-700 px-4 py-2 bg-gray-100 rounded-lg">
            {answer}
          </div>
        )}
      </div>
    );
  };

  const StepCard = ({ step, details }) => {
    return (
      <div className="flex items-center space-x-4 g-4 p-4 rounded-lg shadow-md max-w-3xl min-w-xl">
        <div className="min-w-[80px] flex-shrink-0 flex items-center justify-center">
          <p className="aspect-square h-20 flex items-center justify-center border border-primary border-3 rounded-full text-primary font-bold text-4xl">
            {step}
          </p>
        </div>
  
        <div className="flex flex-col justify-center">
          <p className="font-semibold text-lg text-left">{details[0]}</p>
          <ul className="list-disc pl-4">
            {details[1].map((detail, index) => (
              <li className="text-sm text-left" key={index}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  

export { Header, Footer, CarOption, MainButton, FaqDropdown, StepCard };
