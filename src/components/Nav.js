const Nav = ({ OrderNow }) => {
  return (
    <div className='nav'>
      <a className='nav-item' href='#menu'>
        Menu
      </a>
      <a className='nav-item' href='#about'>
        About Us
      </a>
      <a className='nav-item' href='#location'>
        Location
      </a>
      <a className='nav-item' href='#contact'>
        Contact
      </a>
      <div className='nav-item'>
        <OrderNow />
      </div>
    </div>
  );
};

export default Nav;
