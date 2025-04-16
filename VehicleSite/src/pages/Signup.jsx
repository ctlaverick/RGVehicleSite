import React from 'react';
import * as Components from '../components';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-admin-background p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-300">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-left font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl"
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl"
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Retype Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl"
            />
          </div>
          <div className="flex justify-center">
            <Components.MainButton text="Sign up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;