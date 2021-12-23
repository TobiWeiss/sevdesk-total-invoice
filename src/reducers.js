import { combineReducers } from 'redux';
import languageReducer from './containers/LanguageProvider/store/reducer';
import styleguidePageReducer from './containers/StyleguidePage/store/reducer';
// import languageProviderReducer from './containers/LanguageProvider/reducer';
// import { connectRouter } from 'connected-react-router';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageReducer,
    // language: languageProviderReducer,
    // router: connectRouter(history),
    ...injectedReducers,

    styleguidePage: styleguidePageReducer,
  });

  return rootReducer;
}
