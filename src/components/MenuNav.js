const MenuNav = ({ setSection, menuSections }) => {
  return (
    <div className='menu-nav'>
      {menuSections.map((item, idx) => (
        <div key={item}>
          <span className='menu-nav-item' onClick={() => setSection(item)}>
            {item}
          </span>{' '}
          {/* Adding dots between menu nav items, stops before final item */}
          {idx !== menuSections.length - 1 ? <span>&#9679;</span> : null}
        </div>
      ))}
    </div>
  );
};

export default MenuNav;
