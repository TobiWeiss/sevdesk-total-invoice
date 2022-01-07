import styled from 'styled-components';

const StyledInputSearchWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

 .icon-search{
    position: absolute;
    left: 25px;
  }

  .icon-delete {
    position: absolute;
    right: 15px;
  }
`;

export default StyledInputSearchWrapper;
