// @flow
import '@babel/polyfill'
import { takeLatest, call, put } from 'redux-saga/effects'
import {
  getDeliveryNotes,
  getDeliveryNotesFailure,
  getDeliveryNotesSuccess,
  createTotalInvoiceFailure,
  createTotalInvoiceSuccess
} from './actions'
import { getDeliveryNotesAPI, createTotalInvoiceAPI } from './api'
import { GET_ORDERS, CREATE_TOTAL_INVOICE } from "./constants";
import type { Saga } from 'redux-saga'
import { DeliveryNote } from '../../../classes/DeliveryNote'
import type { DeliveryNoteType } from "../../../types/DeliveryNote";

function * getDeliveryNotesSaga (): Saga<void> {
  try {
    const result: Object = yield call(getDeliveryNotesAPI)
    const deliveryNotes: Array<DeliveryNote> = result.data.map(
      (item: DeliveryNoteType) => new DeliveryNote(item)
    )
    yield put(getDeliveryNotesSuccess(deliveryNotes))
  } catch (error) {
    yield put(getDeliveryNotesFailure(error))
  }
}

function * createTotalInvoiceSaga (data: Array<DeliveryNote>): Saga<void> {
  try {
    yield call(createTotalInvoiceAPI, data)
    yield put(getDeliveryNotes())
    yield put(createTotalInvoiceSuccess())
  } catch (error) {
    yield put(createTotalInvoiceFailure(error))
  }
}

export function* watchGetDeliveryNotes(): Saga<void> {
  yield takeLatest(GET_ORDERS, getDeliveryNotesSaga)
}

export function* watchCreateTotalInvoice(): Saga<void> {
  yield takeLatest(CREATE_TOTAL_INVOICE, createTotalInvoiceSaga)
}

