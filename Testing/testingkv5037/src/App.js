import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className="main-content">
        <h1>Welcome to Our Website!</h1>
        <p>Here is some sample content to demonstrate the layout.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;