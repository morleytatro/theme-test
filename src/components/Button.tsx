import styled from 'styled-components';

import { getThemeVal } from 'utils/theme';

const StyledButton = styled.button`
  background: ${getThemeVal('colors_secondary_500')};
  color: ${getThemeVal('colors_primary_500')};
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