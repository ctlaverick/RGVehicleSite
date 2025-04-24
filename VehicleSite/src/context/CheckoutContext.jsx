import { createContext, useContext, useState, useEffect } from "react";

const CheckoutContext = createContext();

const LOCAL_STORAGE_KEY = "checkoutData";

const defaultCheckoutData = {
  vehicle: null,
  package: {
    selectedOption: "Weekly",
    name: "",
    price: 0,
    suffix: "",
    features: [],
  },
  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  },
  Pickup: {
    date: "",
    time: "",
    location: "",
  }
};

const createCarSnapshot = (car) => ({
  id: car.id,
  make: car.make,
  model: car.model,
  year: car.year,
  thumbnail: car.images?.[0] || "",
});

export const CheckoutProvider = ({ children }) => {
  const [checkoutData, setCheckoutData] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultCheckoutData;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(checkoutData));
  }, [checkoutData]);

  const resetCheckout = () => {
    setCheckoutData(defaultCheckoutData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <CheckoutContext.Provider value={{ checkoutData, setCheckoutData, resetCheckout, createCarSnapshot }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};

