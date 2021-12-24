import React from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { flatten } from 'flat';
import { useGetLanguage } from './hooks';
import TranslationsEnglish from '../../translations/en.json';
import TranslationsGerman from '../../translations/de.json';

export const appLocales = {
  de: TranslationsGerman,
  en: TranslationsEnglish,
};

const LanguageProvider = function ({ children }) {
  const { selectedLanguage } = useGetLanguage();

  // comment the console.error line in once translations in .json files are complete
  // eslint-disable-next-line no-unused-vars
  const customOnErrorFunction = (error) => {
    // console.error(error);
  };

  return (
    <IntlProvider
      messages={flatten(appLocales[selectedLanguage]) || {}}
      locale={selectedLanguage}
      onError={customOnErrorFunction}
    >
      {children}
    </IntlProvider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.element,
};

export default LanguageProvider;
