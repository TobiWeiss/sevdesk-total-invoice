import React from 'react';
import { Spinner } from 'react-bootstrap';
import StyledLoadingSpinner from './StyledLoadingSpinner';

const LoadingSpinner = function () {
  return (
    <StyledLoadingSpinner>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
