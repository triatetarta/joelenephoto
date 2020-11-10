import React from 'react';
import './Images.scss';
import { mainImages } from '../data';

const Images = () => {
  return (
    <div className='main-images'>
      {mainImages.map((image) => {
        const { id, url, name } = image;
        return (
          <div className='image-container' key={id}>
            <img src={url} alt={name} />
          </div>
        );
      })}
    </div>
  );
};

export default Images;
