import { combineReducers } from 'redux';
import languageReducer from './containers/LanguageProvider/store/reducer';
import deliveryNotePageReducer from './containers/DeliveryNotePage/store/reducer';
// import { connectRouter } from 'connected-react-router';

export default (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    language: languageReducer,
    // router: connectRouter(history),
    ...injectedReducers,
    deliveryNotePage: deliveryNotePageReducer
  });

  return rootReducer;
};
