import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <Container>
    <h1>Zugriff verweigert</h1>
    <p>
      Bitte logge dich unter <Link to="/login">/login</Link> ein.
      {' '}
      <Link to="/">here</Link>
      .
      {' '}
    </p>
  </Container>
);

export default NotFoundPage;
