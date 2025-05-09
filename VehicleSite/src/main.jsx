import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CheckoutProvider } from "./context/CheckoutContext";
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
import Account from './pages/Account';
import News from './pages/News';
import TermsAndConditions from './pages/TermsAndConditions';
import TermsOfService from './pages/TermsOfService';
import Accessibility from './pages/Accessibility';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <React.StrictMode>
      <CheckoutProvider>
        <Router basename='/RGVehicleSite/'>
          <div className='bg-background min-h-screen min-w-full flex flex-col'>
            <Header user={loggedInUser} />
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
                <Route path='/account' element={<Account user={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
                <Route path='/news' element={<News />} />
                <Route path='/terms-and-conditions' element={<TermsAndConditions />}/>
                <Route path='/terms-of-service' element={<TermsOfService />}/>
                <Route path='accessibility' element={<Accessibility />}/>
                <Route path='cookie-policy' element={<CookiePolicy />}/>
                <Route path='privacy-policy' element={<PrivacyPolicy />}/>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CheckoutProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
