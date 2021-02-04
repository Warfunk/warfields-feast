import { useState } from 'react';
import { photos } from '../restaurantInfo';

const Photos = () => {
  const [i, setI] = useState(0);
  const p = Object.entries(photos);
  const prevPhoto = () => {
    if (i === 0) {
      setI(p.length - 1);
    } else {
      const newI = i - 1;
      setI(newI);
    }
  };

  const nextPhoto = () => {
    if (i === p.length - 1) {
      setI(0);
    } else {
      const newI = i + 1;
      setI(newI);
    }
  };

  return (
    <div>
      <div className='photo-div'>
        <img key={p[i][0]} src={p[i][1]} alt={p[i][0]} className='photo' />
      </div>
      <span onClick={prevPhoto} className='prev-photo'>
        &#60;
      </span>
      <span onClick={nextPhoto} className='next-photo'>
        &#62;
      </span>
    </div>
  );
};

export default Photos;
