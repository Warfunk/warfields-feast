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
  console.log(cart.length);
  const CartItems = () => {
    return cart.map((item) => (
      <div style={{ display: showCart }} key={cart.indexOf(item)}>
        {item[0]}
        {item[1]}
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
