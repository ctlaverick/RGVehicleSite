import './index.css';
import Header from './components/Header';
import Footer from './components/Footer'
import CarOption from './components/CarOption';

function App() {
  return (
    <div className='bg-Background min-h-full min-w-full'>
      <Header />
      <CarOption />
      <Footer />
    </div>
  );
}

export default App;