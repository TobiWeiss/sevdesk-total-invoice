// @flow
import '@babel/polyfill'
import { takeLatest, call, put } from 'redux-saga/effects'
import {
  getOrdersFailure,
  getOrdersSuccess,
  createTotalInvoiceFailure,
  createTotalInvoiceSuccess
} from './actions'
import { getOrdersAPI, createTotalInvoiceAPI } from './api'
import { GET_ORDERS, CREATE_TOTAL_INVOICE } from "./constants";
import type { Saga } from 'redux-saga'
import { DeliveryNote } from '../../../classes/DeliveryNote'

function * getOrders (): Saga<void> {
  try {
    const result: Object = yield call(getOrdersAPI)
    const OrderNotes: Array<DeliveryNote> = result.data.map(
      (item: Object) => new DeliveryNote(item)
    )
    yield put(getOrdersSuccess(OrderNotes))
  } catch (error) {
    yield put(getOrdersFailure(error))
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

export function* watchGetOrders(): Saga<void> {
  yield takeLatest(GET_ORDERS, getOrders)
}

export function* watchCreateTotalInvoice(): Saga<void> {
  yield takeLatest(CREATE_TOTAL_INVOICE, createTotalInvoice)
}

