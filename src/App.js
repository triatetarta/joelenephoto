import React, { useState, useEffect } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Beauty from './pages/Beauty';
import ContactMe from './pages/ContactMe';
import Loader from './pages/Loader';

import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2220);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className='container'>
          <NavBar />
          <AnimatePresence exitBeforeEnter>
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
            </Switch>
          </AnimatePresence>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
