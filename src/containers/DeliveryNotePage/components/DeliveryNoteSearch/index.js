import * as React from 'react'
import { useState } from 'react'
import InputDateRounded from '../../../../components/InputDate/InputDateRounded'
import InputSearch from '../../../../components/InputSearch'
import { Col, Row, Container } from 'react-bootstrap'

const DeliveryNoteSearch = () => {
  const [searchText, setSearchText] = useState('')

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
          <InputDateRounded></InputDateRounded>
        </Col>
      </Row>
    </Container>
  )
}

export default DeliveryNoteSearch
