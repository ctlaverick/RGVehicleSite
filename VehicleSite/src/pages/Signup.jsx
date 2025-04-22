import React, { useState } from 'react';
import * as Components from '../components';
import { useNavigate } from 'react-router-dom';

export const Login_data = [
  { username: 'User1', email: 'User1@mail.co', password: 'Password1',CardNumber:'1234 4567 8910 1112', isAdmin: false },
  { username: 'Admin1', email: 'Admin1@mail.co', password: 'AdminPassword1',CardNumber:'2111 0198 7654 4321', isAdmin: true }
];

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const usernameExists = Login_data.some(user => user.username.toLowerCase() === username.toLowerCase());
    const emailExists = Login_data.some(user => user.email.toLowerCase() === email.toLowerCase());

    if (usernameExists) {
      alert('Username already taken. Please choose another one.');
      return;
    }

    if (emailExists) {
      alert('Email already taken. Please use another one.');
      return;
    }

    if (password !== retypePassword) {
      alert('Passwords do not match.');
      return;
    }

    const newUser = { username, email, password, isAdmin: false, CardNumber: '' };
    Login_data.push(newUser);
    alert('Sign up successful! You can now log in.');
    
    navigate('/login');
    setUsername('');
    setEmail('');
    setPassword('');
    setRetypePassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-admin-background p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-300">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block text-left font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter a username"
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Retype Password</label>
            <input
              type="password"
              value={retypePassword}
              onChange={e => setRetypePassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
          </div>
          <div className="flex justify-center">
            <Components.MainButton text="Sign up" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};


export default Signup;