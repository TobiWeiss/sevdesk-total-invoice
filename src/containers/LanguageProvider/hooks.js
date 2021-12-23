import { useDispatch, useSelector } from 'react-redux';

export const useGetLanguage = () => {
  const dispatch = useDispatch();

  const selectedLanguage = useSelector((state) => state.language);

  const setSelectedLanguage = (language) => {
    dispatch(setSelectedLanguage(language));
  };

  return {
    selectedLanguage,
    setSelectedLanguage,
  };
};
