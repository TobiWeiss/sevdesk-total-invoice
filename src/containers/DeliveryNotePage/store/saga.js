// @flow
import '@babel/polyfill'
import { takeLatest, call, put } from 'redux-saga/effects'
import {
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

function * getDeliveryNotes (): Saga<void> {
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

function * createTotalInvoice (data: Array<DeliveryNote>): Saga<void> {
  try {
    yield call(createTotalInvoiceAPI, data)
    yield put(createTotalInvoiceSuccess())
  } catch (error) {
    yield put(createTotalInvoiceFailure(error))
  }
}

export function* watchGetDeliveryNotes(): Saga<void> {
  yield takeLatest(GET_ORDERS, getDeliveryNotes)
}

export function* watchCreateTotalInvoice(): Saga<void> {
  yield takeLatest(CREATE_TOTAL_INVOICE, createTotalInvoice)
}

