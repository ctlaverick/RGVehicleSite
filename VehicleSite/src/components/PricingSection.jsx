import React, { useState } from 'react';
import PackageOptionToggle from './PackageOptionToggle';
import PricingCard from './PricingCard';

function PricingSection({vehicle}) {
    const [selectedOption, setSelectedOption] = useState('Weekly');   

    
    const getPriceData = (basePrice) => {
        let multiplyer = 1; // Default multiplier for weekly pricing 
        let discount = 0;
        let suffix = '';
        let message = null;

        switch (selectedOption) {
        case 'Monthly':
            multiplyer = 4; // Monthly multiplier
            discount = 0.1; // 10% off
            suffix = '/mo';
            message = 'Save 10% on Monthly plan!';
            break;
        case 'Yearly':
            multiplyer = 12; // Yearly multiplier
            discount = 0.2; // 20% off
            suffix = '/yr';
            message = 'Save 20% on Yearly plan!';
            break;
        }

        const discountedPrice = (basePrice * (1 - discount) * multiplyer).toFixed(2);
        return [discountedPrice, suffix, (message ? `(${message})` : '')];
    };
    
    const packages = [
        {
            name: 'Basic Package',
            features: [
                'Included insurance (comprehensive)',
                '1 named driver',
                'Maintenance & servicing',
                'Roadside assistance',
            ],
        },
        {
            name: 'Standard Package',
            features: [
                'Included insurance (comprehensive)',
                'Up to 2 named drivers',
                'Maintenance & servicing',
                'Roadside assistance',
                'Monthly professional car cleaning',
                'Free tire replacement (wear & tear)',
                'Priority customer support',
                'Vehicle swap once every 6 months',
            ],
        },
        {
            name: 'Premium Package',
            features: [
                'Included insurance (comprehensive)',
                'Unlimited named drivers (household only)',
                'Maintenance & servicing',
                'Roadside assistance',
                'Bi-weekly professional car cleaning',
                'Free tire replacement (wear & tear)',
                'Priority customer support',
                'Vehicle swap once every 3 months',
                'Free delivery & collection',
                'Premium vehicle options (luxury & performance models)',
                'International insurance coverage (select countries)',
            ],
        },
    ];      

    const getCards = () => {
        if (!vehicle || !vehicle.basePrices) {
            return []; // Return an empty array if vehicle data is not available
    }
        return packages.map((pkg, i) => {
            const isHighlighted = i==1; // Highlight the first card for weekly option
            return {
                ...pkg,
                ...(() => {
                    const [discountedPrice, suffix, message] = getPriceData(vehicle.basePrices[i]);
                    return { price: discountedPrice, suffix, message };
                })(),
                highlighted: isHighlighted,
            };
        });
    }

    const cards = getCards();
    
    return (
        <section className="text-center px-4 py-12">
        <h2 className="text-2xl font-semibold mb-2">Packages</h2>
        <p className="mb-6">Choose from one of our packages or create a custom one</p>

        <PackageOptionToggle selected={selectedOption} onSelect={setSelectedOption} />

        <div className="flex flex-col md:flex-row justify-center gap-6">
            {cards.map((card, i) => (
            <PricingCard key={i} vehicle={vehicle} selectedOption={selectedOption} {...card} />
            ))}
        </div>
        </section>
    );
}

export default PricingSection;
