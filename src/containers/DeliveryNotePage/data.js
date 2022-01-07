// @flow

import { DeliveryNote } from '../../classes/DeliveryNote'

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
