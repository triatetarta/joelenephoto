import React from 'react';
import './SocialMob.scss';

const SocialMob = () => {
  return (
    <div className='social-mob'>
      <div className='social-mob-container'>
        <div className='social-id'>
          <a href='https://instagram.com'>IG</a>
        </div>
        <div className='social-id'>
          <a href='https://facebook.com'>FB</a>
        </div>
        <div className='social-id'>
          <a href='https://pinterest.com'>PI</a>
        </div>
      </div>
    </div>
  );
};

export default SocialMob;
