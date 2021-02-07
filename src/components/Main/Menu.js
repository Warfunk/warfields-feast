import MenuNav from './MenuNav';
import { useState } from 'react';
import { menuList } from '../../restaurantInfo';

const Menu = () => {
  const menuSections = Object.keys(menuList);
  const [section, setSection] = useState(menuSections[0]);
  const s = Object.entries(menuList[section]);
  const Items = () => {
    return (
      <div>
        {s.map((item) => {
          return (
            <div key={item[0]} className='menu-item'>
              <h4>{item[0]}</h4>
              <h5>{item[1].description}</h5>
              <h5>{item[1].price}</h5>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id='menu'>
      <h1>Menu</h1>
      <MenuNav setSection={setSection} menuSections={menuSections} />
      <Items />
    </div>
  );
};

export default Menu;
