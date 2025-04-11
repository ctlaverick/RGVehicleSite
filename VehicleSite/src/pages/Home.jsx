import React from 'react';
import * as Components from '../components';

const images = import.meta.glob('../images/cars/*.{jpg,jpeg,png}', { eager: true });
const carImages = Object.entries(images).map(([path, image]) => ({
  name: path.split('/').pop().replace(/\.(jpg|jpeg|png)$/, ''),
  image: image.default
}));

const Home = () => {
  return (
    <div>
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
            <Components.CarOption key={index} name={car.name} image={car.image} />
          ))}
        </div>
        <div className='justify-center p-8'>
          <Components.MainButton text='View more options'/>
        </div>
      </div>
    </div>
  );
};

export default Home;