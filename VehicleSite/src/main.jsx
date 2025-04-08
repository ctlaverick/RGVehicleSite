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
          <Route path='/About' element={<About />} />
          <Route path='/About-Us' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
