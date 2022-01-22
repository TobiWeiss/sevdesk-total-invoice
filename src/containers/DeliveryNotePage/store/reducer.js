// @flow

import { toast } from 'react-toastify'
import produce from 'immer'
import {
  GET_ORDERS,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  CREATE_TOTAL_INVOICE,
  CREATE_TOTAL_INVOICE_FAILURE,
  CREATE_TOTAL_INVOICE_SUCCESS
} from './constants'

import { initialState } from '../data'
import type { DeliveryNotePageState } from '../data'
import type { DeliveryNoteActionTypes } from './actions'

const deliveryNotePageReducer = (
  state: DeliveryNotePageState = initialState,
  action: DeliveryNoteActionTypes
): DeliveryNotePageState =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ORDERS:
        draft.loading.areOrderNotesLoading = true
        break
      case GET_ORDERS_SUCCESS:
        draft.loading.areOrderNotesLoading = false
        draft.data.orderNotes = action.payload
        break
      case GET_ORDERS_FAILURE:
        draft.loading.areOrderNotesLoading = false
        draft.error = action.payload
        break
      case CREATE_TOTAL_INVOICE:
        draft.loading.isTotalInvoiceLoading = true
        break
      case CREATE_TOTAL_INVOICE_SUCCESS:
        draft.loading.isTotalInvoiceLoading = false;
        const options = {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        };
        toast.success("Rechnung erfolgreich erstellt.", options);
        break
      case CREATE_TOTAL_INVOICE_FAILURE:
        draft.loading.isTotalInvoiceLoading = false
        const options2 = {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        };
        toast.error("Unerwarteter Fehler, bitte Sohn anrufen.", options2);
        draft.error = action.payload
        break
    }
  })

export default deliveryNotePageReducer
