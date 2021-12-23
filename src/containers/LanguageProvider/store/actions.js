import { SET_LANGUAGE } from './constants';

export const setLanguage = (selectedLanguage) => ({
  type: SET_LANGUAGE,
  payload: selectedLanguage,
});
