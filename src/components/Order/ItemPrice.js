import { menuList } from '../../restaurantInfo';

const ItemPrice = ({ s, item, setCart, cart, total, setTotal }) => {
  const onOrder = () => {
    const added = menuList[s][item].price + total;
    const rounded = added.toFixed(2);
    const floated = parseFloat(rounded);
    setCart([[item, menuList[s][item].price], ...cart]);
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
