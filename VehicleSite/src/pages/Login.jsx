import React, { useState } from 'react';
import MainButton from '../components/MainButton';
import { Login_data } from './Signup';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedInUser }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = Login_data.find(
      user =>
        (user.email.toLowerCase() === identifier.toLowerCase() ||
         user.username.toLowerCase() === identifier.toLowerCase()) &&
        user.password === password
    );

    if (user) {
      setLoggedInUser(user);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert(`Welcome back, ${user.username}!`);
      navigate('/');
    } else {
      alert('Invalid username/email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-admin-background p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-left font-medium text-gray-700">Username or Email</label>
            <input
              type="text"
              placeholder="Username or Email"
              value={identifier}
              onChange={e => setIdentifier(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
          </div>
          <div className="flex justify-center">
            <MainButton text="Log in" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;
