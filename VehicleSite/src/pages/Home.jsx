import React from 'react';
import * as Components from '../components';

const images = import.meta.glob('../images/cars/*.{jpg,jpeg,png}', { eager: true });
const carImages = Object.entries(images).map(([path, image]) => ({
  name: path.split('/').pop().replace(/\.(jpg|jpeg|png)$/, ''),
  image: image.default
}));

export const FAQ ={
  "What is a subscription vehicle?":"Answer 1",
  "How does a subscription vehicle Work?":"Answer 2",
  "How long can I have a subscription vehicle":"This is a really long answer to a really simple question just to be able to test the size limits of the box that this answer is put in so that it is able to be tested for different paragraphs of text, who knows if this is as long as i need it but im gonna keep typing till i think it should stop so probably right about now.",
  "How do you pay for a subscription vehicle":"Answer 4",
  "Do i have to get insurance for the subscription vehicle":"Answer 4",
  "How often can I upgrade to a newer model":"Answer 4",
  "Can I have multiple subscription vehicles":"Answer 4",
}

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
        <Components.MainButton text='View Subscription Cars'/>
      </div>
      <div className="w-1/2">
        <img
          src="./src/images/BannerCar.png"
          alt="Car"
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
          <Components.MainButton text='Search'/>
        </div>
      </div>
      <div className='p-8 text-center'>
        <h1 className="text-xl font-semibold">Recommended cars:</h1>
        <div className="flex flex-wrap justify-center gap-4">
        
          {carImages.map((car, index) => (
            <Components.CarOption key={index} name={car.name} image={car.image} stats={Stats_Entries} />
          ))}
        </div>
        <div className='justify-center p-8'>
          <Components.MainButton text='View more options'/>
        </div>
      </div>
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold">The 4 Easy Steps To Getting Your New Subscripton Vehicle</h2>
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          {STEPS_ENTRIES.map(([step, details], index) => (
          <Components.StepCard key={index} step={step} details={details}/>
          ))
          }
        </div>
      </div>
      <div className='p-8 text-center'>
        <h1 className="text-xl font-semibold">FAQ</h1>
        {FAQ_Entries.map(([question, answer], index) => (
          <Components.FaqDropdown key={index} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Home;