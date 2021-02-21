import React from 'react';
import './SocialMob.scss';

const SocialMob = () => {
  return (
    <div className='social-mob'>
      <div className='social-mob-container'>
        <div className='social-id'>
          <a
            href='https://www.instagram.com/joelenekylie/'
            target='_blank'
            rel='noreferrer'
          >
            IG
          </a>
        </div>
        <div className='social-id'>
          <a
            href='https://twitter.com/joelenekylie'
            target='_blank'
            rel='noreferrer'
          >
            TW
          </a>
        </div>
        <div className='social-id'>
          <a
            href='https://uk.pinterest.com/joelenehayward/'
            target='_blank'
            rel='noreferrer'
          >
            PI
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMob;
