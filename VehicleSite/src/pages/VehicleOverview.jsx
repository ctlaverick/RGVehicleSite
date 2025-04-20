import { useParams } from 'react-router-dom';
import LinkButton from '../components/LinkButton';
import VehicleSpecifications from '../components/VehicleSpecifications';
import VehicleFeatures from '../components/VehicleFeatures';
import PricingSection from '../components/PricingSection';

function VehicleOverview() {
    const { id } = useParams(); // Get the vehicle ID from the URL parameters

    if (!id) {
        id = 0; // Default to 0 if no ID is provided
        // or
        // return <div>Error: Vehicle ID not found.</div>;
    }

    // Use ID to get the vehicle information using the API
    // Placeholder data for demonstration
    const vehicle = {
        id: id,
        price: '£145 pm',
        basePrices: [100, 150, 200], // Example weekly base prices for 3 packages
        imageUrl: 'src/images/TempCarImage.jpg', // Placeholder image

        make: '[Vehicle Make]',
        model: '[Vehicle Model]',
        year: '[Vehicle Year]',
        mileage: '[Vehicle Mileage]',
        colour: '[Vehicle Colour]',
        doors: '[Vehicle Doors]',
        seats: '[Vehicle Seats]',
        condition: '[Vehicle Condition]',
        engineType: '[Vehicle Engine Type]',
        transmission: '[Vehicle Transmission]',
        driveType: '[Vehicle Drive Type]',
        fuelType: '[Vehicle Fuel Type]',
        bodyType: '[Vehicle Body Type]',

        // features: [],
    };

    return (
    <div>
        <div className="flex flex-row justify-center items-center p-8 gap-4">
            <div className="w-3/5 flex justify-center items-center">
                <img
                    src={vehicle.imageUrl}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-128 object-cover bg-gray-200"
                />
            </div>

            <div className="w-2/5 flex flex-col justify-center items-start p-8 gap-2">
                <h1 className='font-bold'>{vehicle.make} {vehicle.model} ({vehicle.year})</h1>
                <p className='font-semibold'>{vehicle.price}</p>
                <p>This {vehicle.year} {vehicle.make} {vehicle.model} offers a perfect blend of performance, style, and comfort. With low mileage and a sleek design, it's the ideal choice for anyone looking for a reliable and stylish ride.</p>
                <LinkButton className='self-center' text="View Packages" link="#packages" />
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <VehicleSpecifications vehicle={vehicle} />
                <VehicleFeatures features={vehicle.features} />
            </div>
        </div>

        <div className="" id='packages'>
            <PricingSection vehicle={vehicle} />
        </div>

    </div>
  );
}

export default VehicleOverview;