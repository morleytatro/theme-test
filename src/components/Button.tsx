import styled from 'styled-components';

import { variable } from 'utils/theme';

const StyledButton = styled.button`
  background: ${variable('colors.secondary.500')};
  color: ${variable('colors.primary.500')};
  padding: calc(var(--spacings-s) * 2);
  border-radius: 5px;
  cursor: pointer;
`;

export default function Button({ children, ...rest }) {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
}