import React from 'react';

const About = () => {
  const companyName = '[Company Name]'; // Replace with your company name
  return (
    <div className="flex flex-col p-8 justify-center items-center">

      <div className='p-8 text-center'>
        <h1 className='text-3xl font-bold'>Welcome to {companyName}</h1>
      </div>

      <div className="flex flex-row p-8 h-screen gap-4">

        <div className="w-1/2">
          <h2 className='text-2xl font-semibold'>What is {companyName}?</h2>
          <p>{companyName} is revolutionizing the way you experience driving. </p>
          <br />
          <p>We offer a flexible vehicle subscription service that allows you to drive the car you want, whenever you want, without the hassle of long-term commitments. Whether you need a car for a weekend trip, a daily commute, or just want the freedom to switch vehicles on your terms, we've got you covered. Our all-inclusive subscription packages give you access to a variety of vehicles, with maintenance, insurance, and roadside assistance all included. With {companyName}, you're not just renting a car—you're subscribing to the ultimate driving experience. Drive what you want, when you want, with no strings attached</p>
        </div>

        <div className="w-1/2">
          <img src="./src/images/AboutPageImage1.jpg" alt="Two people looking at documents infront of a car" className='rounded-md shadow-lg'/>
          {/* https://www.pexels.com/photo/happy-customer-and-agent-reading-the-contract-4173196/ */}
        </div>

      </div>

      <div className="flex flex-row p-8 h-screen gap-4">

        <div className="w-1/2">

          <h2 className='text-2xl font-semibold'>What is a Car Subscription?</h2>    
          <p>A car subscription is the ultimate in convenience and flexibility, offering a new way to access a vehicle without the commitment of a long-term lease or purchase. With a car subscription, you pay a monthly fee to access a vehicle of your choice, and the best part?</p>
          <br />
          <h3>Everything is included.</h3>
          <p>From the car itself to maintenance, insurance, and roadside assistance, it's all part of the package. You can switch between different vehicles to suit your needs, whether you're looking for something sporty for a weekend getaway, a spacious SUV for a family trip, or a fuel-efficient model for your daily commute.</p>
          <p>Unlike traditional car rentals or leases, car subscriptions offer unmatched freedom. No more long-term contracts or hidden fees. Simply choose your vehicle, pay your monthly fee, and enjoy a hassle-free driving experience</p>
        </div>

        <div className="w-1/2">
          <img src="./src/images/AboutPageImage2.jpg" alt="Person looking at maps on their phone whilst in a car "  className='rounded-md shadow-lg'/>
          {/* https://www.pexels.com/photo/a-person-checking-the-gps-on-the-cellphone-7362886/ */}
        </div>
      </div>
    </div>
  );
};

export default About;