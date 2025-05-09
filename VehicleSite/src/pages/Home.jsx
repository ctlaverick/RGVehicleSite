import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../components/MainButton';
import CarOption from '../components/CarOption';
import StepCard from '../components/StepCard';
import FaqDropdown from '../components/FaqDropdown';

import BannerImage from '../images/BannerCar.png';


const regularImages = import.meta.glob('../images/cars/*.{jpg,jpeg,png}', { eager: true });
const carImages = Object.entries(regularImages).map(([path, image]) => ({
  name: path.split('/').pop().replace(/\.(jpg|jpeg|png)$/, ''),
  image: image.default
}));

const reccomendedImages = import.meta.glob('../images/reccomendedcars/*.{jpg,jpeg,png}', { eager: true });
const reccomendedCarImages = Object.entries(reccomendedImages).map(([path, image]) => ({
  name: path.split('/').pop().replace(/\.(jpg|jpeg|png)$/, ''),
  image: image.default
}));

export const FAQ = {
  "What is a subscription vehicle?":
    "A subscription vehicle is a service that allows you to access a car through a flexible monthly plan. Instead of owning or leasing, you pay a recurring fee that typically includes the vehicle, insurance, maintenance, and roadside assistance.",

  "How does a subscription vehicle Work?":
    "It works like a car-as-a-service model. You choose a vehicle from the available selection, subscribe for a period that fits your needs, and everything from insurance to servicing is taken care of. You can swap vehicles, pause, or cancel based on your plan terms.",

  "How long can I have a subscription vehicle":
    "Subscription durations are flexible. You can subscribe for as little as a month or keep the same vehicle for as long as you like, depending on the plan you choose. Some plans offer discounts for longer-term commitments.",

  "How do you pay for a subscription vehicle":
    "Payment is made through a secure online portal using a credit or debit card. Billing is done monthly, and you'll receive a clear breakdown of what’s included in your subscription.",

  "Do i have to get insurance for the subscription vehicle":
    "No. Insurance is typically included in the subscription fee, so you’re covered for most common situations. We handle the policy, but you should always check the coverage details and any deductible that may apply.",

  "How often can I upgrade to a newer model":
    "You can upgrade as often as your plan allows. Some premium plans let you change vehicles every month, while others may offer upgrades every few months or upon renewal.",

  "Can I have multiple subscription vehicles":
    "Yes, you can have more than one vehicle under subscription, provided your account is in good standing. Each vehicle will have its own monthly fee, and you may need to meet certain criteria for multiple subscriptions."
};


const steps = {
  "1" : ["Search Our Options", ["Browse our collection of vehicles", "Search for your perfect vehicle", "Use our filtering and search system to find the right vehicle for you"]],
  "2" : ["Customize Your Subscription", ["Choose your subscription package", "Get discounts on extended subscriptions", "Get insurance with your subscription"]],
  "3" : ["Subscribe to Your New Vehicle", ["Finaliize your subscription car package", "Enter your payment details", "Select a time for pickup"]],
  "4" : ["Pickup You Subscription Vehicle", ["Your subscription will be processed in minutes", "Finally pickup your vehicle at the location and time you selected"]],
}

const stats = ['Make', 'Model', '#WD', 'Type'];

const Home = () => {
  const FAQ_Entries = Object.entries(FAQ);
  const STEPS_ENTRIES = Object.entries(steps);
  const Stats_Entries = Object.entries(stats);
  return (
    <div>
      <div className="flex items-center justify-between bg-background p-8">
      <div className="max-w-md mx-auto items-center text-center text-text">
        <h2 className="text-3xl font-bold mb-4">
          From Weekend Getaways <br /> To Daily Commutes <br /> One Subscription
        </h2>
        <p className="mb-4">
          Your next car is just a click away...
        </p>
        <Link to='/subscriptions'>
          <MainButton text='View Subscription Cars'/>
        </Link>
      </div>
      <div className="w-1/2">
        <img
          src={BannerImage}
          alt="Banner Image Car"
          className="max-w-full h-auto items-center"
        />
      </div>
    </div>
      <div className='p-8 mt-8 m-4 bg-primary rounded-lg'>
        <h1 className='text-center text-admin-text font-bold text-3xl'>Find your perfect car today</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          <input type="text" className="w-xs p-2.5 m-4 text-sm rounded-lg bg-admin-background" placeholder="Type"/>
          <input type="text" className="w-xs p-2.5 m-4 text-sm rounded-lg bg-admin-background" placeholder="Make"/>
          <input type="text" className="w-xs p-2.5 m-4 text-sm rounded-lg bg-admin-background" placeholder="Location"/>
          <input type="text" className="w-xs p-2.5 m-4 text-sm rounded-lg bg-admin-background" placeholder="Seats"/>
          <input type="text" className="w-xs p-2.5 m-4 text-sm rounded-lg bg-admin-background" placeholder="Minimum"/>
          <input type="text" className="w-xs p-2.5 m-4 text-sm rounded-lg bg-admin-background" placeholder="Maximum"/>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
        <Link to='/subscriptions'>
          <MainButton text='Search'/>
        </Link>
        </div>
      </div>
      <div className='p-8 text-center'>
        <h1 className="text-xl font-semibold">Recommended cars:</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {reccomendedCarImages.map((car, index) => (
            <CarOption key={index} name={car.name} image={car.image} stats={Stats_Entries} variant='recommended' />
          ))}
          {carImages.map((car, index) => (
            <CarOption key={index} name={car.name} image={car.image} stats={Stats_Entries} variant='default' />
          ))}
        </div>
        <div className='justify-center p-8'>
        <Link to='/subscriptions'>
          <MainButton text='View more options'/>
        </Link>
        </div>
      </div>
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold">The 4 Easy Steps To Getting Your New Subscripton Vehicle</h2>
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          {STEPS_ENTRIES.map(([step, details], index) => (
          <StepCard key={index} step={step} details={details}/>
          ))
          }
        </div>
      </div>
      <div className='p-8 text-center'>
        <h1 className="text-xl font-semibold">FAQ</h1>
        {FAQ_Entries.map(([question, answer], index) => (
          <FaqDropdown key={index} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Home;