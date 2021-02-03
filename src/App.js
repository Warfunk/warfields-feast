import './App.css';
import Header from './Header';
import Menu from './Menu';
import Location from './Location';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Menu />
        <About />
        <Location />
        <Contact />
      </div>
    </div>
  );
}

export default App;
