import React from 'react';
import { useGetApiDetails } from '../hooks';

const StyleguideApiConnection = () => {
  // eslint-disable-next-line no-unused-vars
  const { testApiDetails, isLoading } = useGetApiDetails(1);

  return <div>See code inside</div>;
};

export default StyleguideApiConnection;
