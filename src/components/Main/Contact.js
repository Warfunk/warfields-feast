import { contact } from '../../restaurantInfo';

const Contact = () => {
  return (
    <div>
      <h2 id='contact'>Contact Us</h2>
      <h4>{contact.email}</h4>
      <h4>{contact.phone}</h4>
    </div>
  );
};

export default Contact;
