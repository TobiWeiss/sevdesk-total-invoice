import React from 'react';

const StyleguideEnv = () => {
  return (
    <div>
      <p>env-Variables: </p>
      {process.env.NAME}
    </div>
  );
};

export default StyleguideEnv;
