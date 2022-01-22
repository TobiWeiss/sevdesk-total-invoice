// @flow
import type { DeliveryNotePositionType } from '../types/DeliveryNotePosition'
import type { DeliveryNoteType } from '../types/DeliveryNote'

export class DeliveryNote {
  id: number;
  objectName: string;
  create: Date;
  update: Date;
  orderNumber: string;
  contact: {
    id: number,
    objectName: string
  };
  contactPerson: {
    id: number,
    objectName: string
  };
  orderDate: Date;
  status: string;
  sumNet: number;
  sumGross: number;
  addressName: string;
  addressStreet: string;
  addressZip: string;
  addressCity: string;
  addressCountry: Object;
  address: string;
  positions: Array<DeliveryNotePositionType>;
  xyz: string;

  constructor (data: DeliveryNoteType) {
    this.id = data.id;
    this.objectName = data.objectName;
    this.create = new Date(data.create);
    this.update = new Date(data.update);
    this.orderNumber = data.orderNumber;
    this.contact = data.contact;
    this.contactPerson = data.contactPerson;
    this.orderDate = new Date(data.orderDate);
    this.status = data.status;
    this.sumNet = data.sumNet;
    this.sumGross = data.sumGross;
    this.address = data.address;
    this.addressName = data.addressName;
    this.addressStreet = data.addressStreet;
    this.addressZip = data.addressZip;
    this.addressCity = data.addressCity;
    this.addressCountry = data.addressCountry;
    this.positions = data.positions;
  }
}
