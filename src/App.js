import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Location from './components/Location';
import Contact from './components/Contact';
import About from './components/About';
import Photos from './components/Photos';
import Order from './Order';

function App() {
  const OrderNow = () => {
    return (
      <div className='orderLink'>
        <Link to='/ordernow'>Order Now!</Link>
      </div>
    );
  };
  return (
    <Router>
      <div className='App'>
        <Header OrderNow={OrderNow} />
        <Route exact={true} path='/warfields-feast'>
          <div className='main'>
            <Menu />
            <OrderNow className='order' />
            <About />
            <Photos />
            <Location />
            <Contact />
          </div>
        </Route>
        <Route path='/ordernow'>
          <Order />
        </Route>
      </div>
    </Router>
  );
}

export default App;
