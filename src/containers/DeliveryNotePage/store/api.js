// @flow

import axios from 'axios'
import { DeliveryNote } from '../../../classes/DeliveryNote'

export const getOrdersAPI = (): Promise<Object> => {
  console.info(process.env.NODE_ENV)
  return axios.get(`${String(process.env.API_BASE_URL)}`)
}

export const createTotalInvoiceAPI = (
  data: Array<DeliveryNote>
): Promise<void> => axios.post(`${String(process.env.API_BASE_URL)}`, data)
