import React, { useState } from "react";
import DualRangeSlider from './DualRangeSlider';

const FiltersSidebar = () => {
    const [priceRange, setPriceRange] = useState([0, 999]);
    const [distanceRange, setDistanceRange] = useState([0, 99]);

    const formatCurrency = (value) => {
        const formatted = new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
          minimumFractionDigits: 0, // Optional: removes .00
        }).format(value);
      
        return value >= 1000 ? `${formatted}+` : formatted;
    };


    const formatDistance = (value) =>
        new Intl.NumberFormat("en-US", {
        style: "unit",
        unit: "kilometer",
        }).format(value);

    return (
        <div className="w-full max-w-xs border rounded p-4 space-y-6">
            <h2 className="text-xl font-bold">Filters</h2>

            {/* Price Filter */}
            <div className="p-4">
                <label className="font-semibold">Price</label>
                <DualRangeSlider
                    className="mt-2"
                    min={0}
                    max={1000}
                    step={50}
                    values={priceRange}
                    onChange={setPriceRange}
                    label=""
                    unitFormatter={formatCurrency}
                />
            </div>

            {/* Distance Filter */}
            <div className="p-4">
                <label className="font-semibold">Distance</label>
                <DualRangeSlider
                    className="mt-2"
                    min={0}
                    max={99}
                    step={1}
                    values={distanceRange}
                    onChange={setDistanceRange}
                    label=""
                    unitFormatter={formatDistance}
                />
            </div>

            {/* Seats Filter */}
            <div className="">
                <label className="font-semibold">Seats</label>
                <select className="w-full px-3 py-2 border rounded mt-1">
                    <option>4</option>
                    <option>5</option>
                    <option>7</option>
                </select>
            </div>

            {/* Fuel Type Filter */}
            <div className="">
                <label className="font-semibold">Fuel Type</label>
                <div className="space-y-1 mt-1">
                    {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((type) => (
                        <div key={type} className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>{type}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Models Filter */}
            <div className="">
                <label className="font-semibold">Models</label>
                <div className="space-y-1 mt-1">
                    {['Model 1 (3)', 'Model 2 (1)', 'Model 3 (4)', 'Model 4 (2)'].map((model) => (
                    <div key={model} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>{model}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )

};

export default FiltersSidebar;