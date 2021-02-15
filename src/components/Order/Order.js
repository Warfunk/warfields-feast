import { useState } from 'react';
import './Order.css';

import { menuList } from '../../restaurantInfo';
import SectionItems from './SectionItems';
import Cart from './Cart';

const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartPrices, setCartPrices] = useState([]);
  const sections = Object.keys(menuList);
  const OrderMenu = () => {
    return sections.map((section) => {
      return (
        <div key={section} className='order-list'>
          <h3>{section}</h3>
          <SectionItems
            section={section}
            setCartItems={setCartItems}
            setCartPrices={setCartPrices}
            cartItems={cartItems}
            cartPrices={cartPrices}
          />
        </div>
      );
    });
  };
  return (
    <div className='ord'>
      <Cart
        cartItems={cartItems}
        cartPrices={cartPrices}
        setCartItems={setCartItems}
        setCartPrices={setCartPrices}
      />
      <OrderMenu />
    </div>
  );
};

export default Order;
