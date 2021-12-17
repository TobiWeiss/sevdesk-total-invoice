import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = function () {
  return (
    <Container>
      <h1>404 - page not found</h1>
      <p>
        This page was not found. Return to home page <Link to="/">here</Link>.{' '}
      </p>
    </Container>
  );
};

export default NotFoundPage;
