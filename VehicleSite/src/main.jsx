import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import * as Components from './components';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import VehicleOverview from './pages/VehicleOverview';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FAQPage from './pages/FAQ';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='bg-background min-h-screen min-w-full'>
        <Components.Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<Search />} />
          <Route path='/overview/:id' element={<VehicleOverview />} />
          <Route path='/services' element={<Services />} /> {/* Not needed?*/}
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/faq' element={<FAQPage />} />
          {/* <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/cookie-policy' element={<CookiePolicy />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/news' element={<News />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='/subscriptions' element={<Subscriptions />} />
          <Route path='/accessibility' element={<Accessibility />} />
           */}
        </Routes>
        <Components.Footer />
      </div>
    </Router>
  </React.StrictMode>
);
