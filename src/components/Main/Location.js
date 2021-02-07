import { location } from '../../restaurantInfo';

const Location = () => {
  const street = location.street;
  const city = location.city;
  const state = location.state;
  const zip = location.zip;
  return (
    <div id='location'>
      <h2>Location</h2>
      <h4>{street}</h4>
      <h4>{city}</h4>
      <h4>
        {state}, {zip}
      </h4>
    </div>
  );
};

export default Location;
