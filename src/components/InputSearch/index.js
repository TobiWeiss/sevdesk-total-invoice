import * as React from 'react'
import StyledInputSearch from './StyledInputSearch'
import IconSearch from '../Icons/IconSearch'
import StyledInputSearchWrapper from "./StyledInputSearchWrapper"
import IconClose from '../Icons/IconClose'
import SvgButton from '../SvgButton'


const InputSearch = ({
  placeholder,
  value,
  showDelete,
  setSearchText
}) => (
  <StyledInputSearchWrapper>
    <div className='icon-search'><IconSearch size='lg'  /></div>
    <StyledInputSearch
      value={value}
      placeholder={placeholder}
      onChange={event => setSearchText(event.target.value)}
    />
    {showDelete && (
      <SvgButton className='icon-delete' onClick={() => setSearchText('')}>
        <IconClose size='md' />
      </SvgButton>
    )}
  </StyledInputSearchWrapper>
)

InputSearch.defaultProps = {
  placeholder: '',
  value: '',
  showDelete: false
}

export default InputSearch
