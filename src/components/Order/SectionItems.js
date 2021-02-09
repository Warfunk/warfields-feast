import { menuList } from '../../restaurantInfo';
import ItemPrice from './ItemPrice';

const SectionItems = ({ section, setCart, cart, total, setTotal }) => {
  const si = Object.keys(menuList[section]);
  return (
    <div>
      {si.map((item) => (
        <div key={item} className='item'>
          <div className='item-name'>{item}......</div>
          <ItemPrice
            item={item}
            section={section}
            setCart={setCart}
            cart={cart}
            total={total}
            setTotal={setTotal}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionItems;
