import {
  GET_TEST_API_DETAILS,
  GET_TEST_API_DETAILS_FAILURE,
  GET_TEST_API_DETAILS_SUCCESS,
} from './constants';

export const getTestApiDetails = (payloadId) => ({
  type: GET_TEST_API_DETAILS,
  payload: payloadId,
});

export const getTestApiDetailsSuccess = (data) => ({
  type: GET_TEST_API_DETAILS_SUCCESS,
  payload: data,
});

export const getTestApiDetailsFailure = (error) => ({
  type: GET_TEST_API_DETAILS_FAILURE,
  payload: error,
});
