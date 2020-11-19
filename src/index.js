import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts/BaskervilleSerial-Light.ttf';
import './fonts/BaskervilleSerial-Regular.ttf';
import './fonts/BaskervilleSerial-Medium.ttf';
import './fonts/BaskervilleSerial-Bold.ttf';
import './fonts/BaskervilleSerial-Heavy.ttf';
import './fonts/BaskervilleSerial-Black.ttf';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
