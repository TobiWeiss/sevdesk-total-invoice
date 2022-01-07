// @flow

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeliveryNote } from "../../classes/DeliveryNote";
import { useInjectSaga } from "../../utils/injectSaga";
import { getOrders, createTotalInvoice } from "./store/actions";
import { watchGetOrders, watchCreateTotalInvoice } from "./store/saga";

export const useGetOrders = (): Array<DeliveryNote> => {
  useInjectSaga({ key: 'deliveryNotePage1', saga: watchGetOrders });

  const dispatch = useDispatch();
  const deliveryNotes: Array<DeliveryNote> = useSelector((state) => state.deliveryNotePage.data.orderNotes);

  useEffect((): Function => dispatch(getOrders()) , []);

  return deliveryNotes;
}

export const useCreateTotalInvoice = (): Function => {
  useInjectSaga({ key: 'deliveryNotePage2', saga: watchCreateTotalInvoice });
  const dispatch = useDispatch();

  return (deliveryNotes: Array<DeliveryNote>) => dispatch(createTotalInvoice(deliveryNotes));
}
