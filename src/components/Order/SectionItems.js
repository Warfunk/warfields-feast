import { menuList } from '../../restaurantInfo';
import ItemPrice from './ItemPrice';

const SectionItems = ({
  section,
  setCartItems,
  cartItems,
  cartPrices,
  setCartPrices,
}) => {
  const si = Object.keys(menuList[section]);
  return (
    <div>
      {si.map((item) => (
        <div key={item} className='item'>
          <div className='item-name'>{item}......</div>
          <ItemPrice
            item={item}
            section={section}
            setCartItems={setCartItems}
            setCartPrices={setCartPrices}
            cartItems={cartItems}
            cartPrices={cartPrices}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionItems;
