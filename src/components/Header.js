import Nav from './Nav.js';
import DropDownNav from './DropDownNav';

const Header = () => {
  return (
    <div className='header'>
      <Nav />
      <DropDownNav />
      <h1 className='logo'>Warfield's Tacos</h1>
    </div>
  );
};

export default Header;
