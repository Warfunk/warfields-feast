import { useState, useEffect } from 'react';
import RemoveItem from './RemoveItem';

const Cart = ({ cartItems, cartPrices, setCartItems, setCartPrices }) => {
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState('none');
  const toggleCart = () => {
    if (showCart === 'none') {
      setShowCart('block');
    } else {
      setShowCart('none');
    }
  };

  useEffect(() => {
    function round(value, decimals) {
      return Number(
        Math.round(value + 'e' + decimals) + 'e-' + decimals
      ).toFixed(decimals);
    }
    if (cartPrices.length > 0) {
      const price = cartPrices.reduce((total, price) => total + price);
      const roundedPrice = round(price, 2);
      setTotal(roundedPrice);
    } else {
      setTotal(0);
    }
  }, [cartPrices]);

  const CartItems = () => {
    return cartItems.map((item, idx) => (
      <div style={{ display: showCart }} className='cart-item' key={idx}>
        <div className='item-name'>{item}... </div>
        <div className='item-price'>
          {cartPrices[idx]}
          {'  '}
          <RemoveItem
            item={item}
            setCartPrices={setCartPrices}
            cartPrices={cartPrices}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className='cart'>
      <button onClick={toggleCart} className='crt-btn'>
        Cart
      </button>
      <CartItems cart={cartItems} cartPrices={cartPrices} />
      <h3 style={{ display: showCart }}>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
