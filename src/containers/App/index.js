import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from '../../global-styles';
import NotFoundPage from '../NotFoundPage';
import DeliveryNotePage from '../DeliveryNotePage';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ToastContainer pauseOnHover position="bottom-right" />
    <Switch>
      <Route exact path="/" component={DeliveryNotePage} />
      <Route component={NotFoundPage} />
    </Switch>
    </ThemeProvider>
  </>
);

export default App;
