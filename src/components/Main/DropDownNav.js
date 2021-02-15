import { useState } from 'react';

const DropDownNav = ({ OrderNow }) => {
  const [style, setDisplay] = useState('none');

  const divStyle = {
    display: style,
  };

  const toggleNav = () => {
    if (style === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  };

  return (
    <div>
      <div className='dd' onClick={toggleNav}>
        <button className='btn'>
          <div className='hmbg'></div>
          <div className='hmbg'></div>
          <div className='hmbg'></div>
        </button>
      </div>
      <div style={divStyle} className='dd-nav'>
        <a className='ddnav-item' href='#menu' onClick={toggleNav}>
          Menu
        </a>
        <a className='ddnav-item' href='#about' onClick={toggleNav}>
          About Us
        </a>
        <a className='ddnav-item' href='#location' onClick={toggleNav}>
          Location
        </a>
        <a className='ddnav-item' href='#contact' onClick={toggleNav}>
          Contact
        </a>
        <OrderNow className='nav nav-item' />
      </div>
    </div>
  );
};

export default DropDownNav;
