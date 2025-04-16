import React, { useState } from 'react';
import FiltersSidebar from '../components/FiltersSideBar';
import SearchSortBar from '../components/SearchSortBar';
import CarGrid from '../components/CarGrid';

function searchPage() {
    const [priceRange, setPriceRange] = useState([0, 1000]);

    const formatCurrency = (value) =>
        new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
        }).format(value);

    
    return (
        <div className="h-screen flex">

            <div className="w-80 p-4 overflow-y-auto">
                <FiltersSidebar />
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">

                <div className="p-4">
                    <SearchSortBar />
                </div>

                <div className="flex-1 overflow-auto p-4">
                    <CarGrid />
                </div>
                
            </div>

        </div>
    );
}

export default searchPage;