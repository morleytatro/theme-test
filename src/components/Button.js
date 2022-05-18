import styled from 'styled-components';

import { getThemeVal } from 'utils/theme';

const StyledButton = styled.button`
  background: ${getThemeVal('colors.secondary.500')};
  color: ${getThemeVal('colors.primary.500')};
  padding: 15px;
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