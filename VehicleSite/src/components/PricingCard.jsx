import React from 'react';
// For checkout
import { useCheckout } from "../context/CheckoutContext";
import { useNavigate } from "react-router-dom";

function PricingCard({ vehicle, SelectedOption, name, price, suffix, features, highlighted, message }) {
  const { setCheckoutData, createCarSnapshot } = useCheckout();
  const navigate = useNavigate()
  
  const handlePackageSelect = (selectedPackage) => {
    const carSnapshot = createCarSnapshot(vehicle);

    setCheckoutData(prev => ({
      ...prev,
      vehicle: carSnapshot,
      package: {
        ...selectedPackage,
      }
    }));

    navigate("/checkout");
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md w-full max-w-sm flex flex-col transition-transform transform hover:scale-105 hover:shadow-lg ${
        highlighted ? 'bg-primary text-white' : 'bg-white text-black'
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-3xl font-bold mb-2">
        £{price}
        <span className="text-base font-medium">{suffix}</span>
      </p>
      {message && (
        <p className="text-green-500 text-sm font-medium mb-4">{message}</p>
      )}
      <ul className="mb-6 list-disc list-inside space-y-1 flex-grow">
        {features.map((feature, i) => <li key={i}>{feature}</li>)}
      </ul>
      <button 
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-auto mx-auto"
      onClick={() => handlePackageSelect(
        {
          selectedPackage: {
            SelectedOption,
            name,
            price,
            suffix,
            features,
          }
        }
      )}>
        Subscribe Now
      </button>
    </div>
  );
}

export default PricingCard;