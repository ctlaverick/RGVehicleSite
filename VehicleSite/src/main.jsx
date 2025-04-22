import React, { useState } from 'react';
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
import Account from './pages/Account';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <React.StrictMode>
      <Router>
        <div className='bg-background min-h-screen min-w-full flex flex-col'>
          <Components.Header user={loggedInUser} />
          <main className="flex-grow">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/subscriptions' element={<Search />} />
              <Route path='/overview/:id' element={<VehicleOverview />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser} />} />
              <Route path='/faq' element={<FAQPage />} />
              <Route path='/account' element={<Account user={loggedInUser}/>} />
            </Routes>
          </main>
          <Components.Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
