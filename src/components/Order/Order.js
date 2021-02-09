import { useState } from 'react';
import './Order.css';

import { menuList } from '../../restaurantInfo';
import SectionItems from './SectionItems';
import Cart from './Cart';

const Order = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const sections = Object.keys(menuList);
  const OrderMenu = () => {
    return sections.map((section) => {
      return (
        <div key={section} className='order-list'>
          <h3>{section}</h3>
          <SectionItems
            section={section}
            setCart={setCart}
            cart={cart}
            total={total}
            setTotal={setTotal}
          />
        </div>
      );
    });
  };
  return (
    <div className='ord'>
      <Cart cart={cart} total={total} />
      <OrderMenu />
    </div>
  );
};

export default Order;
