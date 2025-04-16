const CarGrid = () => {
  // Replace this with actual data the styling is done in the CarCard component
    const cars = new Array(48).fill(0); // Mock data
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {cars.map((_, idx) => (
          <CarCard key={idx} recommended={idx < 4} />
        ))}
      </div>
    );
  };
  
  const CarCard = ({ recommended }) => (
    <div className={`border rounded overflow-hidden ${recommended ? 'bg-blue-100' : 'bg-gray-100'}`}>
      {recommended && (
        <div className="bg-blue-700 text-white text-xs px-2 py-1">Recommended</div>
      )}
      <div className="h-32 bg-white"> 
        <img
          src={"src/images/TempCarImage.jpg" || '/path/to/placeholder.jpg'}
          alt="Car"
          className="w-full h-full object-cover bg-gray-200"
        />
      </div>
      <div className="p-2">
        <div className="text-sm font-semibold">Brand - Model</div>
        <div className="flex justify-between items-center mt-1">
          <span className="font-bold">£145 pm</span>
          <button className="bg-green-500 text-white text-sm px-3 py-1 rounded hover:bg-green-600">View</button>
        </div>
      </div>
    </div>
  );

export default CarGrid;