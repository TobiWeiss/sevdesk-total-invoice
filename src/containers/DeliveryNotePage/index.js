// @flow

import * as React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import H1 from '../../components/Headlines/H1'
import { useGetOrders, useCreateTotalInvoice } from './hooks'
import Text from '../../components/Text/index'
import { DeliveryNote } from '../../classes/DeliveryNote'
import ListTile from '../../components/ListTile'
import Button from '../../components/Button'
import theme from '../../theme'
import { Animated } from 'react-animated-css'
import DeliveryNoteSearch from './components/DeliveryNoteSearch'

const DeliveryNotePage = (): React.Node => {
  const [selectedDeliveryNotes, setSelectedDeliveryNotes] = useState<
    Array<DeliveryNote>
  >([])
  const deliveryNotes: Array<DeliveryNote> = useGetOrders()
  const createTotalInvoice: Function = useCreateTotalInvoice()

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

  const handleTotalInvoiceCreation = (): void => {
    createTotalInvoice(selectedDeliveryNotes)
  }

  return (
    <>
      <Helmet>
        <title>Lieferscheine</title>
        <meta name='description' content='Übersicht über Lieferscheine' />
      </Helmet>
      <Container>
        <H1 color={theme.colors.darkBlue} className='mt-5 mb-5'>
          Lieferscheine
        </H1>
        <DeliveryNoteSearch></DeliveryNoteSearch>
        <div className='mb-5'>
          <Button onClick={handleTotalInvoiceCreation}>
            <Text color={theme.colors.white}>{'Sammelrechnung erzeugen'}</Text>
          </Button>
        </div>
        {deliveryNotes &&
          deliveryNotes.length > 0 &&
          deliveryNotes.map((deliveryNote: DeliveryNote, index: number) => (
            <div className='mb-2'>
              <Animated
                animationIn='fadeInLeft'
                isVisible={true}
                animationInDuration={2000}
                animationInDelay={(index + 1) * 500}
              >
                <ListTile
                  values={[
                    deliveryNote.id.toString(),
                    deliveryNote.addressName,
                    deliveryNote.create.toLocaleDateString('de-DE'),
                    deliveryNote.positions.length.toString()
                  ]}
                  onSelect={() => {
                    handleDeliveryNoteSelection(deliveryNote.id)
                  }}
                ></ListTile>
              </Animated>
            </div>
          ))}
      </Container>
    </>
  )
}

export default DeliveryNotePage
