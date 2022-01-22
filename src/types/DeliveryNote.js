// @flow
import type { DeliveryNotePositionType } from '../types/DeliveryNotePosition'

export type DeliveryNoteType = {|
  id: number,
  objectName: string,
  create: Date,
  update: Date,
  orderNumber: string,
  contact: {
    id: number,
    objectName: string
  },
  contactPerson: {
    id: number,
    objectName: string
  },
  orderDate: Date,
  status: number,
  sumNet: number,
  sumGross: number,
  addressName: string,
  addressStreet: string,
  addressZip: string,
  addressCity: string,
  addressCountry: Object,
  address: string,
  positions: Array<DeliveryNotePositionType>,
|}
