import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Menu from './components/Main/Menu';
import Location from './components/Main/Location';
import Contact from './components/Main/Contact';
import About from './components/Main/About';
import Photos from './components/Main/Photos';
import Order from './components/Order/Order';

function App() {
  const OrderNow = () => {
    return (
      <Link className='order' to='/ordernow'>
        Order Now!
      </Link>
    );
  };
  return (
    <Router>
      <div className='App'>
        <Header OrderNow={OrderNow} />
        <div className='main'>
          <Route exact={true} path='/warfields-feast'>
            <Menu />
            <OrderNow />
            <About />
            <Photos />
            <Location />
            <Contact />
          </Route>
          <Route path='/ordernow'>
            <Order />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
