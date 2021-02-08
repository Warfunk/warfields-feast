import { menuList } from '../../restaurantInfo';

const ItemPrice = ({ s, item, setCart, cart, total, setTotal }) => {
  const onOrder = () => {
    const price = menuList[s][item].price;
    const added = price + total;
    const rounded = added.toFixed(2);
    const floated = parseFloat(rounded);
    const newItem = [item, price];
    setCart([newItem, ...cart]);
    setTotal(floated);
  };
  return (
    <div>
      {menuList[s][item].price}
      <button className='order-btn' onClick={onOrder}>
        Add to Order
      </button>
    </div>
  );
};

export default ItemPrice;
