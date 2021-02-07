import Nav from './Main/Nav.js';
import DropDownNav from './Main/DropDownNav';
import { logoImage, name } from '../restaurantInfo';
import { Route, Link } from 'react-router-dom';

const Header = ({ OrderNow }) => {
  return (
    <div className='header' style={{ backgroundImage: `url(${logoImage})` }}>
      <Route exact={true} path='/warfields-feast'>
        <Nav OrderNow={OrderNow} />
        <DropDownNav OrderNow={OrderNow} />
      </Route>
      <Route path='/ordernow'>
        <Link to='/warfields-feast' className='nav nav-item'>
          Home
        </Link>
      </Route>
      <h1 className='logo'>{name}</h1>
    </div>
  );
};

export default Header;
