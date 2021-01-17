import React from 'react';

import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/om-meg">
            <AboutContainer />
          </Route>
          <Route path="/kontakt">
            <ContactContainer />
          </Route>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;