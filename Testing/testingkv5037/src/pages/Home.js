import React from 'react';
import CarOption from '../components/CarOption';


const images = require.context('../images/cars', false, /\.(jpg|jpeg|png)$/);
const carImages = images.keys().map(image => ({
  name: image.replace('./', '').replace(/\.(jpg|jpeg|png)$/, ''),
  image: images(image),
}));

const Home = () => {
  return (
    <div>
      <div className='p-8 mt-8 m-4 bg-Primary rounded-lg'>
        <h1 className='text-center text-Admin-Text font-Bold text-3xl'>Find your perfect car today</h1>
        <div className='flex flex-wrap justify-center gap-4 Text-black'>
          <input type="text" id="email" class="w-xs p-2.5 m-4 text-sm rounded-lg" placeholder="Type"/>
          <input type="text" id="email" class="w-xs p-2.5 m-4 text-sm rounded-lg" placeholder="Make"/>
          <input type="text" id="email" class="w-xs p-2.5 m-4 text-sm rounded-lg" placeholder="Location"/>
          <input type="text" id="email" class="w-xs p-2.5 m-4 text-sm rounded-lg" placeholder="Seats"/>
          <input type="text" id="email" class="w-xs p-2.5 m-4 text-sm rounded-lg" placeholder="Minimum"/>
          <input type="text" id="email" class="w-xs p-2.5 m-4 text-sm rounded-lg" placeholder="Maximum"/>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
        <button className="bg-Success text-Text py-2 px-4 rounded-md">
          Search
        </button>
        </div>
        
      </div>
      
      <div className='p-8 text-center'>
        <h1 className="text-xl font-semibold">Recommended cars:</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {carImages.map((car, index) => (
            <CarOption key={index} name={car.name} image={car.image} />
          ))}
        </div>
        <div className='justify-center p-8 '>
        <button className="col-start-6 bg-Primary text-Admin-Text py-2 px-4 rounded-lg hover:text-Secondary">
            View more options
        </button>
        </div>
      </div>
    </div>
  );
};

export default Home;