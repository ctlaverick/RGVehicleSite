import { useState } from "react";

function AddressForm({ formData, setFormData }) {
    const [postcodeError, setPostcodeError] = useState("");
    const [showAddress2, setShowAddress2] = useState(formData.address2 !== "");

    const validatePostcode = (value) => {
        const regexByCountry = {
            "United Kingdom": /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
            "United States": /^\d{5}(-\d{4})?$/,
            "Canada": /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/,
            "Australia": /^\d{4}$/,
        };
        const regex = regexByCountry[formData.country] || /^[A-Za-z0-9 ]{3,10}$/;
        return regex.test(value);
    };

    return (
        <div className="mt-6 space-y-4">
            <div>
                <label htmlFor="Country" className="block text-sm font-medium text-gray-700">Country</label>
                <select
                    id="Country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                </select>
            </div>

            <div>
                <label htmlFor="Address1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                <input
                    type="text"
                    id="Address1"
                    value={formData.address1}
                    onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                    placeholder="Street address"
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <button
                    type="button"
                    onClick={() => setShowAddress2(!showAddress2)}
                    className="text-sm text-blue-600 hover:underline"
                >
                    {showAddress2 ? "Hide" : "Add"} Address Line 2
                </button>
                {showAddress2 && (
                    <input
                        type="text"
                        id="Address2"
                        value={formData.address2}
                        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                        placeholder="Apartment, suite, etc."
                        className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                )}
            </div>

            <div>
                <label htmlFor="City" className="block text-sm font-medium text-gray-700">City</label>
                <input
                    type="text"
                    id="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="City"
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="Postcode" className="block text-sm font-medium text-gray-700">Postcode</label>
                <input
                    type="text"
                    id="Postcode"
                    value={formData.postcode}
                    onChange={(e) => {
                        const value = e.target.value;
                        setFormData({ ...formData, postcode: value });
                        setPostcodeError(validatePostcode(value) ? "" : `Invalid postcode for ${formData.country}`);
                    }}
                    placeholder="Postcode"
                    required
                    className={`mt-1 w-full border ${postcodeError ? "border-red-500" : "border-gray-300"} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${postcodeError ? "focus:ring-red-400" : "focus:ring-blue-500"}`}
                />
                {postcodeError && (
                    <p className="text-sm text-red-600 mt-1">{postcodeError}</p>
                )}
            </div>
        </div>
    );
}

export default AddressForm;
