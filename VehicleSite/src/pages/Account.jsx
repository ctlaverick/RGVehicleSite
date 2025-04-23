import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Components from '../components';

const Account = ({ user, setLoggedInUser }) => {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  const renderContent = (tab) => {
    switch (tab) {
      case 'details':
        return (
          <div className="bg-admin-background p-4 rounded shadow text-left">
            <h2 className="text-xl font-semibold mb-2">Account Details</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        );
      case 'edit':
        return (
          <div className="bg-admin-background p-4 rounded shadow text-left">
            <h2 className="text-xl font-semibold mb-2">Edit Account</h2>
            <form className="space-y-4 p-2">
              <input type="text" placeholder="New Username" className="w-full p-2 border rounded" />
              <input type="email" placeholder="New Email" className="w-full p-2 border rounded" />
              <Components.MainButton type="submit" text="Update account info"/>
            </form>
            <form className="space-y-4 p-2">
              <input type="text" placeholder="Card number" className="w-full p-2 border rounded" />
              <Components.MainButton type="submit" text="Update card details"/>
            </form>
          </div>
        );
      case 'payment':
        return (
          <div className="bg-admin-background p-4 rounded shadow text-left">
            <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
            <p>Card: {user.CardNumber}</p>
            <p>Next billing: May 1, 2025</p>
          </div>
        );
      default:
        return null;
    }
  };

  const toggleTab = (tab) => {
    setActiveTab((prev) => (prev === tab ? null : tab));
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);

    navigate('/login');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Account</h1>

      <div className="flex flex-col gap-2">
        {['details', 'payment', 'edit'].map((tab) => (
          <div key={tab}>
            <button
              onClick={() => toggleTab(tab)}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === tab ? 'bg-primary text-admin-text' : 'bg-gray-200'
              }`}
            >
              {tab === 'details' && 'Account Details'}
              {tab === 'payment' && 'Payment Details'}
              {tab === 'edit' && 'Edit Account'}
            </button>
            {activeTab === tab && (
              <div className="mt-2 mb-4">
                {renderContent(tab)}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={handleLogout}
          className="bg-success text-admin-text py-2 px-4 rounded-lg hover:bg-green-600 hover:text-secondary cursor-pointer mt-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
