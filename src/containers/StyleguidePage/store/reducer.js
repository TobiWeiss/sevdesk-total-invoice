import produce from 'immer';
import {
  GET_TEST_API_DETAILS,
  GET_TEST_API_DETAILS_SUCCESS,
  GET_TEST_API_DETAILS_FAILURE,
} from './constants';

import { initialStates } from '../data';

export const initialState = {
  loading: initialStates.loading,
  error: {},
  data: initialStates.data,
};

const orderOverviewPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_TEST_API_DETAILS:
        draft.loading = true;
        break;
      case GET_TEST_API_DETAILS_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case GET_TEST_API_DETAILS_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
    }
  });

export default orderOverviewPageReducer;
