import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
    const [seconds, setSeconds] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (seconds === 0) {
            navigate("/order-confirmation"); // or wherever your search page route is
        }

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds, navigate]);

    return (
        <div className="w-full max-w-xl mx-auto bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md shadow-md mt-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Payment is not set up in this demo</h2>
            <p>
                You will be directed to the order confirmation page in {" "}
                <span className="font-bold">{seconds}</span> second{seconds !== 1 && "s"}.
            </p>
        </div>
    );
}

export default Payment