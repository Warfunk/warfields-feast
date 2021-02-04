import { useState } from 'react';

const DropDownNav = () => {
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
        <a className='ddnav-item' href='#menu'>
          Menu
        </a>
        <a className='ddnav-item' href='#about'>
          About Us
        </a>
        <a className='ddnav-item' href='#location'>
          Location
        </a>
        <a className='ddnav-item' href='#contact'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default DropDownNav;
