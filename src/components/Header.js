import Nav from './Nav.js';
import DropDownNav from './DropDownNav';
import { logoImage, name } from '../restaurantInfo';

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${logoImage})` }}>
      <Nav />
      <DropDownNav />
      <h1 className='logo'>{name}</h1>
    </div>
  );
};

export default Header;
