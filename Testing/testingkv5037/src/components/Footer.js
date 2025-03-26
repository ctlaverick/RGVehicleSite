import React from 'react';

const Footer = () => {
  
  const subheadings = {
    'Privacy policy': ['Overview', 'Data Collection', 'User Rights'],
    'Terms of service': ['General Terms', 'Usage Policy', 'Liability'],
    'Contact us': ['Support', 'Feedback', 'Sales Inquiry'],
  };

  return (
    <footer className='bg-Primary text-white p-4 text-center'>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex gap-8'>
          {['Privacy policy', 'Terms of service', 'Contact us'].map((option) => (
            <div key={option}>
              <a href={option.replace(/\s/g, '-')} className='text-Secondary text-lg hover:text-Alerts'>
                {option}
              </a>
              <br />
              {subheadings[option].map((subheading) => (
                <div key={subheading}>
                  <a href={subheading.replace(/\s/g, '-')} className='text-Secondary text-sm hover:text-Alerts'>
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