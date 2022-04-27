import styled from 'styled-components';

import { COLORS } from '../themes/constants';

const StyledButton = styled.button`
  background: ${COLORS.PRIMARY};
  color: ${COLORS.SECONDARY};
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Button({ children, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}