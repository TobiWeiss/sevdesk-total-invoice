import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const HomePage = function () {
  return (
    <Container className="mt-5">
      <h1>Hello bytabo members</h1>
      <p>
        See predefined components and other code examples in the{' '}
        <Link to="/styleguide">styleguide</Link>
      </p>
    </Container>
  );
};

export default HomePage;
