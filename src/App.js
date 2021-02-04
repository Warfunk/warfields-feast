import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Location from './components/Location';
import Contact from './components/Contact';
import About from './components/About';
import Photos from './components/Photos';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Menu />
        <About />
        <Photos />
        <Location />
        <Contact />
      </div>
    </div>
  );
}

export default App;
