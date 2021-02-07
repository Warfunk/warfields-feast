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
    return <Link to='/ordernow'>Order Now!</Link>;
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
