import { menuList } from '../../restaurantInfo';

const ItemPrice = ({
  section,
  item,
  setCartItems,
  cartItems,
  cartPrices,
  setCartPrices,
}) => {
  const onOrder = () => {
    const price = menuList[section][item].price;
    const newItem = [item];
    setCartItems([newItem, ...cartItems]);
    setCartPrices([price, ...cartPrices]);
  };
  return (
    <div className='item-price'>
      {menuList[section][item].price}
      <button className='order-btn' onClick={onOrder}>
        Add to Order
      </button>
    </div>
  );
};

export default ItemPrice;
