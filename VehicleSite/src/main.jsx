import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Header, Footer, CarOption} from "./components.jsx";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='bg-background min-h-screen min-w-full'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/cookie-policy' element={<CookiePolicy />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/news' element={<News />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='/subscriptions' element={<Subscriptions />} />
          <Route path='/accessibility' element={<Accessibility />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
