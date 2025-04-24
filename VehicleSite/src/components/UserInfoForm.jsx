function UserInfoForm({ formData, setFormData }) {
    return (
        <div className="mt-6 space-y-4">
            <div>
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="tel"
                    id="Phone"
                    name="Phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}

export default UserInfoForm;
