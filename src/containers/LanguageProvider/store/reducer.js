import produce from 'immer';
import { SET_LANGUAGE } from './constants';

import { initialStates } from '../data';

export const initialState = initialStates.language;

const orderOverviewPageReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case SET_LANGUAGE:
    draft.language = action.payload;
    break;
  }
});

export default orderOverviewPageReducer;
