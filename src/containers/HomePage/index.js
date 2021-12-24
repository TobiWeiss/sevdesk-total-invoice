import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const HomePage = () => (
  <Container className="mt-5">
    <h1>Hello bytabo members</h1>
    <p>
      <FormattedMessage {...messages.linkStyleguide} />
      <Link to="/styleguide">styleguide</Link>
    </p>
  </Container>
);

export default HomePage;
