// @flow
import { DeliveryNote } from '../../classes/DeliveryNote'
import moment from "moment";

export type DeliveryNotePageState = {
  data: {
    orderNotes: Array<DeliveryNote>
  },
  error: ?Error,
  loading: {
    areOrderNotesLoading: boolean,
    isTotalInvoiceLoading: boolean,
  }
}

export const initialState: DeliveryNotePageState = {
  data: {
    orderNotes: []
  },
  error: null,
  loading: {
    areOrderNotesLoading: false,
    isTotalInvoiceLoading: false
  }
}

export const initialDateRange: [Date, Date] =  [
  moment()
    .subtract(30, 'days')
    .toDate(),
  new Date(),
];
