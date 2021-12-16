import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyles from '../../global-styles';
import Styleguide from '../StyleguidePage';

const App = function () {
  const a = 3;

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Styleguide} />
      </Switch>
    </>
  );
};

export default App;
