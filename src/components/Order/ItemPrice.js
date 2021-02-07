import { menuList } from '../../restaurantInfo';

const ItemPrice = ({ s, item, setCart, cart, total, setTotal }) => {
  const onOrder = () => {
    setCart([[item, menuList[s][item].price], ...cart]);
    setTotal(total + menuList[s][item].price);
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
