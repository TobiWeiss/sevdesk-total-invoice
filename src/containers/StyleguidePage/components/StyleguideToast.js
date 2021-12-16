import React from 'react';
import { toast } from 'react-toastify';

const StyleguideHeadlines = function () {
  const notifyInfo = () => toast.info('This is the default toast');
  const notifyError = () => toast.error('This is the default toast');
  const notifySuccess = () => toast.success('This is the default toast');

  return (
    <>
      <div onClick={notifyInfo}>Show Info Toast</div>
      <div onClick={notifyError}>Show Error Toast</div>
      <div onClick={notifySuccess}>Show Success Toast</div>
    </>
  );
};

export default StyleguideHeadlines;
