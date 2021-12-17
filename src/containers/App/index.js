import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from '../../global-styles';
import HomePage from '../HomePage';
import StyleguidePage from '../StyleguidePage';
import NotFoundPage from '../NotFoundPage';

const App = function () {
  return (
    <>
      <GlobalStyles />
      <ToastContainer pauseOnHover position="bottom-right" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/styleguide" component={StyleguidePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
