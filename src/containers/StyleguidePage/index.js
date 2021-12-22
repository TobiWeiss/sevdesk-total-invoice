import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { v4 as uuidv4 } from 'uuid';
import LoadingSpinner from '../../components/LoadingSpinner';
import Chip from '../../components/Chip';
import theme from '../../theme';
import H2 from '../../components/H2';
import Dropdown from '../../components/Dropdown';
import StyleguideHeadlines from './components/StyleguideHeadlines';
import StyleguideIcons from './components/StyleguideIcons';
import { useGetOrderDetails } from './hooks';
import StyleguideToast from './components/StyleguideToast';

const StyleguidePage = function () {
  // eslint-disable-next-line no-unused-vars
  const { testApiDetails, isLoading } = useGetOrderDetails(1);

  const mappingExample = [1, 2, 3, 4];

  return (
    <>
      <Helmet>
        <title>Styleguide</title>
        <meta name="description" content="A React.js Boilerplate application homepage" />
      </Helmet>
      <Container>
        <StyleguideHeadlines />
        <StyleguideIcons />

        <p>env-Variables: </p>
        {process.env.NAME}

        <H2>Loading Spinner</H2>
        <LoadingSpinner />

        <H2>Toast</H2>
        <StyleguideToast />

        <H2>Chips</H2>
        <Chip color={theme.colors.primary} text="Chip 1" />
        <Chip color={theme.colors.primary} text="Removable Chip" isRemovable />

        <p>list icons</p>

        <H2>Mapping</H2>
        <ul>
          {mappingExample.map((item) => (
            <li key={uuidv4()}>{item}</li>
          ))}
        </ul>

        <H2>Dropdown</H2>
        <Dropdown
          label="Dropdown-Selection"
          values={[
            { key: '1', value: 'Option 1' },
            { key: '2', value: 'Option 2' },
          ]}
        />
      </Container>
    </>
  );
};

export default StyleguidePage;
