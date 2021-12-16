import { combineReducers } from 'redux';
import globalReducer from './containers/App/reducer';
import styleguidePageReducer from './containers/StyleguidePage/store/reducer';
// import languageProviderReducer from './containers/LanguageProvider/reducer';
// import { connectRouter } from 'connected-react-router';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    // language: languageProviderReducer,
    // router: connectRouter(history),
    ...injectedReducers,

    styleguidePage: styleguidePageReducer,
  });

  return rootReducer;
}
