import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className="main-content">
        <h1>Content goes here!</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;