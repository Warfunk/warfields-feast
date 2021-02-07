import Nav from './Nav.js';
import DropDownNav from './DropDownNav';
import { logoImage, name } from '../restaurantInfo';
import { Route } from 'react-router-dom';

const Header = ({ OrderNow }) => {
  return (
    <div className='header' style={{ backgroundImage: `url(${logoImage})` }}>
      <Route exact={true} path='/warfields-feast'>
        <Nav OrderNow={OrderNow} />
        <DropDownNav OrderNow={OrderNow} />
      </Route>
      <h1 className='logo'>{name}</h1>
    </div>
  );
};

export default Header;
