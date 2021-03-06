// @flow

import React, { useState, useLayoutEffect } from "react";
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Text from '../Text'
import Button from '../Button'
import StyledListTile from './StyledListTile'
import SvgButton from '../SvgButton'
import IconCheck from '../Icons/IconCheck'
import StyledListTileIconWrapper from './StyledListTileIconWrapper'
import theme from '../../theme'
import type { Element } from 'react'
import ToolTip from '../ToolTip'
import { Animated } from 'react-animated-css'

type ListeTileProps = {
  values: Array<string>,
  onSelect: Function,
  index: number,
  isSelected: boolean
}

const ListTile = ({ values, onSelect, index, isSelected }: ListeTileProps): Element<any> => {

  const handleSelection = (): void => {
    onSelect(values)
  }

  return (
    <>
      <StyledListTile index={index}>
        <Row>
          {values.map((value: string, index: number) => (
            <Col xs={2} className="d-flex justify-content-center">
              <Text color={theme.colors.darkGray} font={theme.fonts.sansSerif}>
                {value || '-'}
              </Text>
            </Col>
          ))}
          <Col xs={2}>
            <span className='d-flex justify-content-center'>
              <StyledListTileIconWrapper>
                <SvgButton onClick={handleSelection}>
                  <ToolTip
                    placement='top'
                    tooltipContent={
                      'Lieferschein für Sammelrechnung hinzufügen'
                    }
                  >
                    <IconCheck
                      size='lg'
                      color={
                        isSelected
                          ? theme.colors.lightGreen
                          : theme.colors.darkGray
                      }
                    />
                  </ToolTip>
                </SvgButton>
              </StyledListTileIconWrapper>
            </span>
          </Col>
        </Row>
      </StyledListTile>
    </>
  )
}

export default ListTile
