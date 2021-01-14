import React from 'react';

import SiteNavigation from './components/SiteNavigation';

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
        <SiteNavigation />
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