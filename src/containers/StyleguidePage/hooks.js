import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTestApiDetails } from './store/actions';
import { useInjectSaga } from '../../utils/injectSaga';
import { watchGetTestApiDetails } from './store/saga';

export const useStateInfo = () => {
  const dispatch = useDispatch();

  const testApiDetails = useSelector((state) => state.styleguidePage.data);

  const setTestApiDetails = (value) => {
    dispatch(setTestApiDetails(value));
  };

  return {
    testApiDetails,
    setTestApiDetails,
  };
};

export const useGetOrderDetails = (payloadId) => {
  useInjectSaga({ key: 'styleguidePage', saga: watchGetTestApiDetails });

  const dispatch = useDispatch();
  const testApiDetails = useSelector((state) => state.styleguidePage.data);

  const isTestApiLoading = useSelector((state) => state.styleguidePage.loading);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(isTestApiLoading);
  }, [isTestApiLoading]);

  useEffect(() => {
    dispatch(getTestApiDetails(payloadId));
  }, [payloadId]);

  return { testApiDetails, isLoading };
};
