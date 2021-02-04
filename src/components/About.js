import { about } from '../restaurantInfo';

const About = () => {
  return (
    <div id='about'>
      <h2>About Us</h2>
      <div className='about-p'>{about}</div>
    </div>
  );
};

export default About;
