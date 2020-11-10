import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Beauty from './pages/Beauty';
import ContactMe from './pages/ContactMe';
import Pricing from './pages/Pricing';

import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className='container'>
      <NavBar />
      <Switch location={location} key={location.pathname}>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/beauty'>
          <Beauty />
        </Route>
        <Route path='/contact-me'>
          <ContactMe />
        </Route>
        <Route path='/pricing'>
          <Pricing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
