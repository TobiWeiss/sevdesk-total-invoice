// @flow

import axios from 'axios'
import { DeliveryNote } from '../../../classes/DeliveryNote'

export const getDeliveryNotesAPI = (): Promise<Object> => {
  const mode = process.env.NODE_ENV;
  return axios.get(`${String(process.env.API_BASE_URL)}${mode === "production" ? "getOrderNotes.js" : ""}`)
}

export const createTotalInvoiceAPI = (
  data: Array<DeliveryNote>
): Promise<void> => {
  const mode = process.env.NODE_ENV;
  return axios.post(`${String(process.env.API_BASE_URL)}${mode === "production" ? "createTotalInvoice.js" : ""}`, data)
}
