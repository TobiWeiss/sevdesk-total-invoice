// @flow

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeliveryNote } from '../../classes/DeliveryNote'
import { useInjectSaga } from '../../utils/injectSaga'
import { initialDateRange } from './data'
import { getDeliveryNotes, createTotalInvoice } from './store/actions'
import { watchGetDeliveryNotes, watchCreateTotalInvoice } from './store/saga'
import type { ActionWithoutPayloadType } from '../../types/Actions'

export const useGetDeliveryNotes = (): Array<DeliveryNote> => {
  useInjectSaga({ key: 'deliveryNotePage1', saga: watchGetDeliveryNotes })

  const dispatch = useDispatch()
  const deliveryNotes: Array<DeliveryNote> = useSelector(
    state => state.deliveryNotePage.data.orderNotes
  )

  useEffect((): Function => dispatch(getDeliveryNotes()), [])

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
  const deliveryNotes: Array<DeliveryNote> = useGetDeliveryNotes()
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
          deliveryNoteDate.setHours(0,0,0,0) >= dateRange[0].setHours(0,0,0,0) &&
          (dateRange[1] === null || deliveryNoteDate.setHours(0,0,0,0) <= dateRange[1].setHours(0,0,0,0))
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
