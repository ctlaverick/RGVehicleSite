import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CheckoutProvider } from "./context/CheckoutContext";
import './index.css';
import * as Components from './components';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import VehicleOverview from './pages/VehicleOverview';
import CheckoutDetails from './pages/CheckoutDetails';
import Payment from './pages/Payment'
import OrderConfirmation from './pages/OrderConfirmation'
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FAQPage from './pages/FAQ';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <React.StrictMode>
      <CheckoutProvider>
        <Router>
          <div className='bg-background min-h-screen min-w-full flex flex-col'>
            <Components.Header user={loggedInUser} />
            <main className="flex-grow">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/subscriptions' element={<Search />} />
                <Route path='/overview/:id' element={<VehicleOverview />} />
                <Route path='/checkout' element={<CheckoutDetails />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/order-confirmation' element={<OrderConfirmation />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser} />} />
                <Route path='/faq' element={<FAQPage />} />
              </Routes>
            </main>
            <Components.Footer />
          </div>
        </Router>
      </CheckoutProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
