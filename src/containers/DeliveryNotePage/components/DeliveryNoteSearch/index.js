// @flow

import * as React from 'react'
import { useState } from 'react'
import InputDateRounded from '../../../../components/InputDate/InputDateRounded'
import InputSearch from '../../../../components/InputSearch'
import { Col, Row, Container } from 'react-bootstrap'

/* ------------- Props ------------- */

type DeliveryNoteSearchProps = {
  searchText: string,
  setSearchText: Function,
  dateRange: [Date, Date],
  setDateRange: Function
}

/* ------------- JSX ------------- */

const DeliveryNoteSearch = ({
  searchText,
  setSearchText,
  dateRange,
  setDateRange
}: DeliveryNoteSearchProps): React.Node => {
  return (
    <Container className='mb-5'>
      <Row>
        <Col sm={7}>
          <InputSearch
            value={searchText}
            setSearchText={setSearchText}
            showDelete={searchText.length > 0}
            placeholder={'Kundenname eingeben'}
          />
        </Col>
        <Col sm={4}>
          <InputDateRounded placeholder='Datum auswhälen' selectedDateRange={dateRange} setSelectedDateRange={setDateRange}></InputDateRounded>
        </Col>
      </Row>
    </Container>
  )
}

export default DeliveryNoteSearch
