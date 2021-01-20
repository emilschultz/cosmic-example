import React from 'react';

import GlobalStyle from './components/GlobalStyle';

import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import BlogListContainer from './containers/BlogListContainer';
import BlogPostContainer from './containers/BlogPostContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/om-meg" component={AboutContainer} />
          <Route path="/kontakt" component={ContactContainer} />
          <Route path="/blogg/:slug" component={BlogPostContainer} />
          <Route path="/blogg" component={BlogListContainer} />
          <Route path="/" component={HomeContainer} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;