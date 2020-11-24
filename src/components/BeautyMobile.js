import React, { useState, useEffect } from 'react';
import { beautyGallery } from '../data';

import './BeautyMobile.scss';

const BeautyMobile = () => {
  const [beauty, setBeauty] = useState(beautyGallery);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = beauty.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, beauty]);

  return (
    <div className='section'>
      <div className='hide'>
        <h1 className='gal'>GALLERY</h1>
      </div>

      <div className='section-center'>
        {beauty.map((phot, photIndex) => {
          const { id, url, name, number } = phot;

          let position = 'nextSlide';

          if (photIndex === index) {
            position = 'activeSlide';
          }
          if (
            photIndex === index - 1 ||
            (index === 0 && photIndex === beauty.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <div className={`${position} image-container`} key={id}>
              <img src={url} alt={name} className='person-img' />
              <h4>{number}</h4>
            </div>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <svg
            width='59'
            height='30'
            viewBox='0 0 59 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.23223 17.2322C0.255924 18.2085 0.255924 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.346016 18.1184 0.346016 17.1421 1.32233L1.23223 17.2322ZM59 16.5L3 16.5L3 21.5L59 21.5L59 16.5Z'
              fill='black'
            />
          </svg>
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <svg
            width='59'
            height='30'
            viewBox='0 0 59 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M57.7678 20.7678C58.7441 19.7915 58.7441 18.2085 57.7678 17.2322L41.8579 1.32233C40.8816 0.34602 39.2986 0.34602 38.3223 1.32233C37.346 2.29864 37.346 3.88155 38.3223 4.85786L52.4645 19L38.3223 33.1421C37.346 34.1184 37.346 35.7014 38.3223 36.6777C39.2986 37.654 40.8816 37.654 41.8579 36.6777L57.7678 20.7678ZM0 21.5L56 21.5V16.5L0 16.5L0 21.5Z'
              fill='black'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BeautyMobile;
