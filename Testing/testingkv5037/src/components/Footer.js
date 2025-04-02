import React from 'react';
import logo from '../images/logo.png';


const Footer = () => {
  
  const headings = ['Contact us','Privacy policy','About us','Cookie policy','FAQ','Terms of service','News','Terms and conditions','Subscriptions','Accessibility'];

  return (
    <footer className='bg-Primary text-white p-4 grid grid-cols-5 gap-3'>
        <img src={logo} alt='Logo' className='h-24 w-24' />
        <div className='grid grid-cols-2 gap-1'>
          {headings.map((option) => (
            <div key={option} className='col-span-1'>
              <a href={option.replace(/\s/g, '-')} className='text-Admin-Text text-lg hover:text-Secondary'>
                {option}
              </a>
            </div>
          ))}
        </div>
            <h1 className='col-start-5 font-bold text-center text-Admin-Text'>Join our news letter!</h1>
            <input type="text" id="email" class="col-start-5 w-full p-2.5 text-sm rounded-lg" placeholder="Enter Email address"/>
            <button className="col-start-6 bg-Success text-Text py-2 px-4 rounded-lg">
            Enter
            </button>
    </footer>
  );
};

export default Footer;