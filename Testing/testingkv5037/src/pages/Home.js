import React from 'react';
import CarOption from '../components/CarOption';


const images = require.context('../images/cars', false, /\.(jpg|jpeg|png)$/);
const carImages = images.keys().map(image => ({
  name: image.replace('./', '').replace(/\.(jpg|jpeg|png)$/, ''),
  image: images(image),
}));

const Home = () => {
  return (
    <div className='p-8 text-center'>
      <h1 className="text-xl font-semibold">Recommended cars:</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {carImages.map((car, index) => (
          <CarOption key={index} name={car.name} image={car.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;