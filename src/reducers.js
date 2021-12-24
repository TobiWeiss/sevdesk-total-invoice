import { combineReducers } from 'redux';
import languageReducer from './containers/LanguageProvider/store/reducer';
import styleguidePageReducer from './containers/StyleguidePage/store/reducer';
// import { connectRouter } from 'connected-react-router';

export default (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    language: languageReducer,
    // router: connectRouter(history),
    ...injectedReducers,

    styleguidePage: styleguidePageReducer,
  });

  return rootReducer;
};
