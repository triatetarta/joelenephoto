import React from 'react';
import Images from '../components/Images';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-title'>
        <h1>
          <span className='joelene'>JOELENE </span>
          <span className='kylie'>KYLIE</span>
        </h1>
      </div>
      <Images />
      <div className='social'>
        <ul>
          <li>IG</li>
          <li>FB</li>
          <li>PI</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
