import Modal from 'styled-react-modal';
import theme from '../../theme';

const StyledModal = Modal.styled`
  background-color: ${theme.colors.white};
  padding: 40px 40px 40px 40px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @keyframes modalFadeIn {
    from {transform: translateY(-100%);opacity: 0;}
    to {transform: translateY(0);opacity: 1;}
  }

    animation-name: modalFadeIn;
    animation-iteration-count: 1;

    animation-duration: .5s;
`;

export default StyledModal;
