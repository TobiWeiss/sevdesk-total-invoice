// @flow

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeliveryNote } from '../../classes/DeliveryNote'
import { useInjectSaga } from '../../utils/injectSaga'
import { initialDateRange } from './data'
import { getOrders, createTotalInvoice } from './store/actions'
import { watchGetOrders, watchCreateTotalInvoice } from './store/saga'
import type { ActionWithoutPayloadType } from '../../types/Actions'

export const useGetOrders = (): Array<DeliveryNote> => {
  useInjectSaga({ key: 'deliveryNotePage1', saga: watchGetOrders })

  const dispatch = useDispatch()
  const deliveryNotes: Array<DeliveryNote> = useSelector(
    state => state.deliveryNotePage.data.orderNotes
  )

  useEffect((): Function => dispatch(getOrders()), [])

  return deliveryNotes
}

export const useCreateTotalInvoice = (): Function => {
  useInjectSaga({ key: 'deliveryNotePage2', saga: watchCreateTotalInvoice })
  const dispatch = useDispatch()

  return (deliveryNotes: Array<DeliveryNote>) =>
    dispatch(createTotalInvoice(deliveryNotes))
}

export const useSelectDeliveryNotes = (
  deliveryNotes: Array<DeliveryNote>
): [Array<DeliveryNote>, Function] => {
  const [selectedDeliveryNotes, setSelectedDeliveryNotes] = useState<
    Array<DeliveryNote>
  >([])

  const handleDeliveryNoteSelection = (deliveryNoteId: number): void => {
    const isDeliveryNoteSelected: boolean = selectedDeliveryNotes.some(
      (deliveryNote: DeliveryNote) => deliveryNote.id === deliveryNoteId
    )
    isDeliveryNoteSelected
      ? setSelectedDeliveryNotes(
          selectedDeliveryNotes.filter(
            (deliveryNote: DeliveryNote) => deliveryNote.id !== deliveryNoteId
          )
        )
      : setSelectedDeliveryNotes([
          ...selectedDeliveryNotes,
          ...deliveryNotes.filter(
            (deliveryNote: DeliveryNote) => deliveryNote.id === deliveryNoteId
          )
        ])
  }

  return [selectedDeliveryNotes, handleDeliveryNoteSelection]
}

export const useSearchDeliveryNotes = (): [
  Array<DeliveryNote>,
  string,
  Function,
  [Date, Date],
  Function
] => {
  const deliveryNotes: Array<DeliveryNote> = useGetOrders()
  const [filteredDeliveryNotes, setFilteredDeliveryNotes] = useState<
    Array<DeliveryNote>
  >([])
  const [searchText, setSearchText] = useState<string>('')
  const [dateRange, setDateRange] = useState<[Date, Date]>(initialDateRange)

  useEffect((): void => {
    setFilteredDeliveryNotes(deliveryNotes)
  }, [deliveryNotes])

  useEffect((): void => {
    setFilteredDeliveryNotes(
      deliveryNotes.filter((deliveryNote: DeliveryNote) => {
        const deliveryNoteDate: Date = deliveryNote.create
        return (
          deliveryNote.addressName
            .toLowerCase()
            .includes(searchText.trim().toLowerCase()) &&
          deliveryNoteDate >= dateRange[0] &&
          deliveryNoteDate <= dateRange[1]
        )
      })
    )
  }, [searchText, dateRange])

  return [
    filteredDeliveryNotes,
    searchText,
    setSearchText,
    dateRange,
    setDateRange
  ]
}
