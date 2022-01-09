// @flow
import * as React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import H1 from '../../components/Headlines/H1'
import {
  useGetOrders,
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
            <Button onClick={() => createTotalInvoice(selectedDeliveryNotes)}>
              <Text color={theme.colors.white}>
                {'Sammelrechnung erzeugen'}
              </Text>
            </Button>
          </Animated>
        </div>
        <Animated
          animationIn='fadeInRight'
          isVisible={true}
          animationInDuration={2000}
        >
          {filteredDeliveryNotes &&
            filteredDeliveryNotes.length > 0 &&
            filteredDeliveryNotes.map(
              (deliveryNote: DeliveryNote, index: number) => (
                <div className='mb-2'>
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
                </div>
              )
            )}
        </Animated>
      </Container>
    </>
  )
}

export default DeliveryNotePage
