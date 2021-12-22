import React from 'react';
import { useGetOrderDetails } from '../hooks';

const StyleguideApiConnection = function () {
  // eslint-disable-next-line no-unused-vars
  const { testApiDetails, isLoading } = useGetOrderDetails(1);

  return <div>See code inside</div>;
};

export default StyleguideApiConnection;
