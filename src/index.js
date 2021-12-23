import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import App from './containers/App';
import './http.interceptor';
import LanguageProvider from './containers/LanguageProvider';
const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
);
