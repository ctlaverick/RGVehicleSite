import { useCheckout } from "../context/CheckoutContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfoForm from "../components/UserInfoForm";
import AddressForm from "../components/AddressForm";

function CheckoutError() {
    const [seconds, setSeconds] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (seconds === 0) {
            navigate("/subscriptions"); // or wherever your search page route is
        }

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds, navigate]);

    return (
        <div className="w-full max-w-xl mx-auto bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md shadow-md mt-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <p>
                You will be redirected back to the search page in{" "}
                <span className="font-bold">{seconds}</span> second{seconds !== 1 && "s"}.
            </p>
        </div>
    );
}

function CheckoutDetails() {
    const { setCheckoutData, createCarSnapshot } = useCheckout();
    const navigate = useNavigate()
    
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const [addressInfo, setAddressInfo] = useState({
        address1: "",
        address2: "",
        city: "",
        country: "United Kingdom",
        postcode: ""
    });

    const { checkoutData } = useCheckout();

    if (!checkoutData.vehicle || !checkoutData.package) {
        return (
            CheckoutError() // Show error if no vehicle or package data is available
        );
    }
      
    const handleSubmit = (e) => {
        e.preventDefault();

        setCheckoutData((prev) => ({
            ...prev,
            userInfo: {
                ...userInfo,
            },
            address: {
                ...addressInfo,
            }
        }));
        console.log(checkoutData);
        navigate("/payment");
    };
    
    return (
        <div className="flex flex-col items-center px-4 py-8 gap-6">
            <h1 className="text-2xl font-semibold text-center">
                Subscribe to {checkoutData.vehicle.make} {checkoutData.vehicle.model}
            </h1>

            {/* Shared container for consistent width */}
            <div className="w-full max-w-2xl flex flex-col gap-6">
                
                {/* Vehicle Details Box */}
                <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-md w-full">
                    <img
                        src={checkoutData.vehicle.thumbnail}
                        alt="vehicle thumbnail"
                        className="w-48 h-auto rounded-md object-cover min-h-[200px]"
                    />
                    <div className="text-left">
                        <h2 className="text-lg font-semibold">{checkoutData.vehicle.make} {checkoutData.vehicle.model}</h2>
                        <p className="text-gray-700">Price: <span className="font-medium">{checkoutData.package.price}</span></p>
                        <p className="text-gray-700">Package: <span className="font-medium">{checkoutData.package.name}</span></p>
                        <p className="text-gray-700">Location: <span className="font-medium">{checkoutData.vehicle.location}</span></p>
                    </div>
                </div>

                {/* Purchaser Info Form */}
                <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-full">
                    <h2 className="text-xl font-semibold mb-4 text-center">Purchaser Information</h2>
                    <form onSubmit={handleSubmit}>

                        <UserInfoForm
                            formData={userInfo}
                            setFormData={setUserInfo}
                        />
                        <AddressForm
                            formData={addressInfo}
                            setFormData={setAddressInfo}
                        />

                        <button
                            type="submit"
                            className="mt-4 bg-success text-white font-semibold py-2 rounded-md transition-colors duration-200 w-full"
                        >
                            Proceed to Payment
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default CheckoutDetails;
