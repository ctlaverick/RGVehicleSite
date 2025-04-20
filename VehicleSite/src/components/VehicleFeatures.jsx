const VehicleFeatures = ({
    features = [
      { label: 'GPS', description: 'Built-in GPS for easy navigation' },
      { label: 'Heated Seats', description: 'Front and rear heated seats for added comfort' },
      { label: 'Bluetooth', description: 'Hands-free calling and audio streaming' },
      { label: 'Parking Sensors', description: 'For safe and easy parking' },
      { label: 'Auto Park', description: 'Automated parking assistance system' },
      { label: 'Leather Seats', description: 'Premium leather seating surfaces' },
      { label: 'Sunroof', description: 'Tilt and slide glass sunroof' },
      { label: 'Keyless Entry', description: 'Push-button start and remote entry' },
      { label: 'Cruise Control', description: 'Set and maintain your speed on highways' },
      { label: 'Premium Audio', description: 'High-quality audio system for superior sound' },
      { label: 'Touchscreen', description: 'User-friendly interface with multimedia controls' },
      { label: 'Climate Control', description: 'Dual-zone automatic temperature control' },
      { label: 'Wireless Charging', description: 'Convenient in-car wireless charging pad' },
    ],
  }) => {
    return (
      <div className="border p-6 rounded-md shadow-sm w-full max-w-4xl">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Vehicle Features</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-admin-background rounded-md p-4 text-center font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer h-[80px] flex items-center justify-center text-sm"
            >
              <span className="block group-hover:hidden">{feature.label}</span>
              <span className="hidden group-hover:block">{feature.description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default VehicleFeatures;  