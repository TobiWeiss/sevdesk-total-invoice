import styled from 'styled-components'
import theme from '../../theme'

const StyledListTile = styled.div`
  opacity: 0;
  animation: ${props =>
    props.index % 2 === 0 ? 'fadeInLeft 2s' : 'fadeInRight 2s'};
  animation-delay: ${props => props.index * 0.3}s;
  animation-fill-mode: forwards;
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  height: 63px;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.08);

  .row {
    height: 63px;
    align-items: center;
    margin-left: 30px;
  }
`

export default StyledListTile
