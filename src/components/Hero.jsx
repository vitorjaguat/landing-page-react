import './Hero.css';

import React from 'react';

export default function Hero({ imageSrc }) {
  return (
    <div className='hero'>
      <img src={imageSrc} alt='Books' className='hero__image' />
      <h1 className='hero__title'>Books for everyone.</h1>
    </div>
  );
}
