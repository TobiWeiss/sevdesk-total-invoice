import '@babel/polyfill';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getTestApiDetailsFailure, getTestApiDetailsSuccess } from './actions';
import { getTestApiDetailsApi } from './api';
import { GET_TEST_API_DETAILS } from './constants';

function* getTestApiDetails(payload) {
  try {
    const payloadId = payload.payload;
    const result = yield call(getTestApiDetailsApi, payloadId);
    yield put(getTestApiDetailsSuccess(result.data));
  } catch (error) {
    yield put(getTestApiDetailsFailure(error));
    console.log('error', error);
  }
}

export function* watchGetTestApiDetails() {
  yield takeLatest(GET_TEST_API_DETAILS, getTestApiDetails);
}
