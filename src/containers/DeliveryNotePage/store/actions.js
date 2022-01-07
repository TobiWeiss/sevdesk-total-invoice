// @flow

import {
  GET_ORDERS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_SUCCESS,
  CREATE_TOTAL_INVOICE,
  CREATE_TOTAL_INVOICE_SUCCESS,
  CREATE_TOTAL_INVOICE_FAILURE
} from './constants'

import type {
  ActionWithoutPayloadType,
  ActionWithPayloadType
} from '../../../types/Actions'
import { DeliveryNote } from '../../../classes/DeliveryNote'

type GetOrdersActionType = ActionWithoutPayloadType<typeof GET_ORDERS>
type GetOrdersSuccessActionType = ActionWithPayloadType<
  typeof GET_ORDERS_SUCCESS,
  Array<DeliveryNote>
>
type GetOrdersFailureActionType = ActionWithPayloadType<
  typeof GET_ORDERS_FAILURE,
  Error
>
type CreateTotalInvoiceActionType = ActionWithPayloadType<typeof CREATE_TOTAL_INVOICE, Array<DeliveryNote>>
type CreateTotalInvoiceSuccessActionType = ActionWithoutPayloadType<typeof CREATE_TOTAL_INVOICE_SUCCESS>
type CreateTotalInvoiceFailureActionType = ActionWithPayloadType<typeof CREATE_TOTAL_INVOICE_FAILURE, Error>


export type DeliveryNoteActionTypes =
  | GetOrdersSuccessActionType
  | GetOrdersActionType
  | GetOrdersFailureActionType

export const getOrders = (): GetOrdersActionType => ({
  type: GET_ORDERS
})

export const getOrdersSuccess = (
  data: Array<DeliveryNote>
): GetOrdersSuccessActionType => ({
  type: GET_ORDERS_SUCCESS,
  payload: data
})

export const getOrdersFailure = (error: Error): GetOrdersFailureActionType => ({
  type: GET_ORDERS_FAILURE,
  payload: error
})


export const createTotalInvoice = (data: Array<DeliveryNote>): CreateTotalInvoiceActionType => ({
  type: CREATE_TOTAL_INVOICE,
  payload: data
});

export const createTotalInvoiceSuccess = (): CreateTotalInvoiceSuccessActionType => ({
  type: CREATE_TOTAL_INVOICE_SUCCESS
});

export const createTotalInvoiceFailure = (error: Error): CreateTotalInvoiceFailureActionType => ({
  type: CREATE_TOTAL_INVOICE_FAILURE,
  payload: error
});
