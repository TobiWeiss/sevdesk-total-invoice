import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import StyleguideHeadlines from './components/StyleguideHeadlines';
import StyleguideIcons from './components/StyleguideIcons';
import StyleguideToast from './components/StyleguideToast';
import Accordion from '../../components/Accordion';
import StyleguideEnv from './components/StyleguideEnv';
import StyleguideChips from './components/StyleguideChips';
import StyleguideLists from './components/StyleguideLists';
import StyleguideDropdown from './components/StyleguideDropdown';
import StyleguideApiConnection from './components/StyleguideApiConnection';
import StyleguideLoadingSpinner from './components/StyleguideLoadingSpinner';
import StyleguideTranslations from './components/StyleguideTranslations';

const StyleguidePage = function () {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Helmet>
        <title>Styleguide</title>
        <meta name="description" content="A React.js Boilerplate application homepage" />
      </Helmet>
      <Container>
        <h1 className="mt-5 mb-5">Here is a list of our available components</h1>

        <Accordion
          elements={[
            {
              headline: 'Headlines',
              content: <StyleguideHeadlines />,
            },
            {
              headline: 'Icons',
              content: <StyleguideIcons />,
            },
            {
              headline: 'Toast',
              content: <StyleguideToast />,
            },
            {
              headline: 'Usage env variables',
              content: <StyleguideEnv />,
            },
            {
              headline: 'Translations',
              content: <StyleguideTranslations />,
            },
            {
              headline: 'Loading Spinner',
              content: <StyleguideLoadingSpinner />,
            },
            {
              headline: 'Chips',
              content: <StyleguideChips />,
            },
            {
              headline: 'Lists',
              content: <StyleguideLists />,
            },
            {
              headline: 'Dropdown',
              content: <StyleguideDropdown />,
            },
            {
              headline: 'API Connection',
              content: <StyleguideApiConnection />,
            },
          ]}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </Container>
    </>
  );
};

export default StyleguidePage;
