import { menuList } from '../../restaurantInfo';
import ItemPrice from './ItemPrice';

const SectionItems = ({ section, setCart, cart, total, setTotal }) => {
  const si = Object.keys(menuList[section]);
  return (
    <div>
      {si.map((item) => (
        <div key={item}>
          <h5 key={item} className='item'>
            {item}......
            <ItemPrice
              item={item}
              section={section}
              setCart={setCart}
              cart={cart}
              total={total}
              setTotal={setTotal}
            />
          </h5>
        </div>
      ))}
    </div>
  );
};

export default SectionItems;
