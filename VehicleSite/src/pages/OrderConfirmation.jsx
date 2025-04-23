import { useCheckout } from "../context/CheckoutContext";
import LinkButton from "../components/LinkButton";

function OrderConfirmation() {
    const { checkoutData } = useCheckout();

    return (
        <div className="flex flex-col items-center px-4 py-8">
            <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md text-center space-y-6">

                <h1 className="text-2xl font-semibold text-primary">Order Confirmation</h1>
                <p className="text-text text-lg">Your order has been confirmed!</p>

                <img
                    src={checkoutData.vehicle.thumbnail}
                    alt={`Vehicle Thumbnail for ${checkoutData.vehicle.make} ${checkoutData.vehicle.model}`}
                    className="w-full sm:w-72 mx-auto rounded-md shadow-md"
                />

                {/* Vehicle Details */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold mb-2 text-text">Vehicle Details</h2>
                    <p className="text-text">{checkoutData.vehicle.year} {checkoutData.vehicle.make} {checkoutData.vehicle.model}</p>
                </div>

                {/* Package Details */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold mb-2 text-text">Package Details</h2>
                    <p className="text-text font-medium">{checkoutData.package.name}</p>
                    <p className="text-text">Price: £{checkoutData.package.price} {checkoutData.package.suffix}</p>
                </div>

                {/* Pickup Details */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold mb-2 text-text">Pickup Details</h2>
                    <p className="text-text">Date: {checkoutData.Pickup.date}</p>
                    <p className="text-text">Time: {checkoutData.Pickup.time}</p>
                    <p className="text-text">Location: {checkoutData.Pickup.location}</p>
                </div>

                <LinkButton text="Home" link="/" />
            </div>
        </div>
    );
}

export default OrderConfirmation;
