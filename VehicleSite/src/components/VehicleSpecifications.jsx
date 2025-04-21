const VehicleSpecifications = ({
    vehicle = {
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
    },
  }) => {
    const specs = [
        { label: 'Make', value: vehicle.make },
        { label: 'Model', value: vehicle.model },
        { label: 'Year', value: vehicle.year },
        { label: 'Mileage', value: vehicle.mileage },
        { label: 'Colour', value: vehicle.colour },
        { label: 'Doors', value: vehicle.doors },
        { label: 'Seats', value: vehicle.seats },
        { label: 'Condition', value: vehicle.condition },
        { label: 'Engine Type', value: vehicle.engineType },
        { label: 'Transmission', value: vehicle.transmission },
        { label: 'Drive Type', value: vehicle.driveType },
        { label: 'Fuel Type', value: vehicle.fuelType },
        { label: 'Body Type', value: vehicle.bodyType },
    ];
    
    return (
        <div className="border p-6 rounded-md shadow-sm w-full max-w-4xl">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Vehicle Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
            {specs.map((spec, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-semibold">{spec.label}:</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default VehicleSpecifications;