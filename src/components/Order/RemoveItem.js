const RemoveItem = ({
  item,
  setCartItems,
  cartItems,
  cartPrices,
  setCartPrices,
}) => {
  const removeItem = () => {
    const indexOfItem = cartItems.indexOf(item);
    const updatedCartItems1 = cartItems.slice(0, indexOfItem);
    const updatedCartItems2 = cartItems.slice(indexOfItem + 1);
    setCartItems([...updatedCartItems1, ...updatedCartItems2]);
    const updatedCartPrices1 = cartPrices.slice(0, indexOfItem);
    const updatedCartPrices2 = cartPrices.slice(indexOfItem + 1);
    setCartPrices([...updatedCartPrices1, ...updatedCartPrices2]);
  };

  return <i className='fa fa-trash remove' onClick={removeItem}></i>;
};

export default RemoveItem;
