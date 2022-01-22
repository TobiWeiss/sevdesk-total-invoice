// @flow
import * as React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import H1 from '../../components/Headlines/H1'
import {
  useGetDeliveryNotes,
  useCreateTotalInvoice,
  useSearchDeliveryNotes,
  useSelectDeliveryNotes
} from './hooks'
import Text from '../../components/Text/index'
import { DeliveryNote } from '../../classes/DeliveryNote'
import ListTile from '../../components/ListTile'
import Button from '../../components/Button'
import theme from '../../theme'
import { Animated } from 'react-animated-css'
import DeliveryNoteSearch from './components/DeliveryNoteSearch'
import ModalService from '../../services/modalService'
import { getCreateInvoiceModal } from '../../components/Modal/ModalHandler'
import ListTileHeader from '../../components/ListTileHeader'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import LoadingSpinner from "../../components/LoadingSpinner";

const DeliveryNotePage = (): React.Node => {
  const createTotalInvoice: Function = useCreateTotalInvoice()
  const [
    filteredDeliveryNotes,
    searchText,
    setSearchText,
    dateRange,
    setDateRange
  ] = useSearchDeliveryNotes()
  const [
    selectedDeliveryNotes,
    handleDeliveryNoteSelection
  ] = useSelectDeliveryNotes(filteredDeliveryNotes)

  const handleInvoiceCreation = (): void => {
    const onConfirm = (): void => {
      createTotalInvoice(selectedDeliveryNotes)
      ModalService.close()
    }
    const onCancel = (): void => {
      ModalService.close()
    }

    ModalService.open(
      getCreateInvoiceModal(onConfirm, onCancel, selectedDeliveryNotes.length)
    )
  }

  return (
    <>
      <Helmet>
        <title>Lieferscheine</title>
        <meta name='description' content='Übersicht über Lieferscheine' />
      </Helmet>
      <Container>
        <Animated
          animationIn='fadeInLeft'
          isVisible={true}
          animationInDuration={2000}
        >
          <H1 color={theme.colors.darkBlue} className='mt-5 mb-5'>
            Lieferscheine
          </H1>
        </Animated>
        <Animated
          animationIn='fadeInRight'
          isVisible={true}
          animationInDuration={3000}
        >
          <DeliveryNoteSearch
            dateRange={dateRange}
            setDateRange={setDateRange}
            searchText={searchText}
            setSearchText={setSearchText}
          ></DeliveryNoteSearch>
        </Animated>
        <div className='mb-5'>
          <Animated
            animationIn='fadeInLeft'
            isVisible={true}
            animationInDuration={2000}
          >
            <Button onClick={() => handleInvoiceCreation()} type={'primary'}>
              <Text color={theme.colors.white}>
                {'Sammelrechnung erzeugen'}
              </Text>
            </Button>
          </Animated>
        </div>
        <Animated
          animationIn='fadeInLeft'
          isVisible={true}
          animationInDuration={2000}
        >
          <ListTileHeader
            header={[
              'Lieferscheinnr.',
              'Kunde',
              'Datum',
              'Positionen',
              'Abgerechnet',
              'Auswählen'
            ]}
          />
        </Animated>
        {filteredDeliveryNotes &&
          filteredDeliveryNotes.length > 0 &&
          filteredDeliveryNotes.map(
            (deliveryNote: DeliveryNote, index: number) => (
              <div className='mb-2'>
                <ListTile
                  index={index}
                  values={[
                    deliveryNote.id.toString(),
                    deliveryNote.addressName,
                    deliveryNote.create.toLocaleDateString('de-DE'),
                    deliveryNote.positions.length.toString(),
                    deliveryNote.status == '1000' ? 'Ja' : 'Nein'
                  ]}
                  onSelect={() => {
                    handleDeliveryNoteSelection(deliveryNote.id)
                  }}
                ></ListTile>
              </div>
            )
          )}
      </Container>
    </>
  )
}

export default withAuthenticationRequired(DeliveryNotePage, {
  onRedirecting: (): React.Node => <div className="mt-5"><LoadingSpinner /></div>
});
