import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTestApiDetails } from './store/actions';
import { useInjectSaga } from '../../utils/injectSaga';
import { watchGetTestApiDetails } from './store/saga';
import { setLanguage as setLanguageAction } from '../LanguageProvider/store/actions';

export const useStateInfo = () => { // access state without saga
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const setLanguage = (lang) => {
    dispatch(setLanguageAction(lang));
  };

  return {
    language,
    setLanguage,
  };
};

export const useGetApiDetails = (payloadId) => { // access state with saga
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
