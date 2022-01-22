import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Text from '../Text';
import StyledListTileHeader from './StyledListTileHeader';

const ListTileHeader = ({ header }) => (
  <StyledListTileHeader>
    <Row>
      {header.map(element => (
        <Col xs={2} key={uuidv4()} className="d-flex justify-content-center">
          <Text>{element}</Text>
        </Col>
      ))}
    </Row>
  </StyledListTileHeader>
);

ListTileHeader.propTypes = {
  header: PropTypes.array,
};

export default ListTileHeader;
