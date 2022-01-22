import styled from 'styled-components'
import theme from '../../theme'

const StyledListTileHeader = styled.div`
  span {
    color: ${theme.colors.opaqueGray};
    font-weight: bold;
  }
  height: 40px;
  .row {
    margin-left: 30px;
  }
  align-items: center;
`

export default StyledListTileHeader
