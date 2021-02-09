import { useState } from 'react';

const Cart = ({ cart, total }) => {
  const [showCart, setShowCart] = useState('none');
  const toggleCart = () => {
    if (showCart === 'none') {
      setShowCart('block');
    } else {
      setShowCart('none');
    }
  };

  const CartItems = () => {
    return cart.map((item) => (
      <div
        style={{ display: showCart }}
        className='cart-item'
        key={cart.indexOf(item)}
      >
        <div className='item-name'>{item[0]}...</div>
        <div className='item-price'>{item[1]}</div>
      </div>
    ));
  };

  return (
    <div className='cart'>
      <button onClick={toggleCart} className='crt-btn'>
        Cart
      </button>
      <CartItems cart={cart} />
      <h3 style={{ display: showCart }}>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
