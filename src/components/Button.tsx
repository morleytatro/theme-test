import styled from 'styled-components';

import { cssVar } from 'utils/theme';

const StyledButton = styled.button`
  background: ${cssVar('colors.secondary.500')};
  color: ${cssVar('colors.primary.500')};
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