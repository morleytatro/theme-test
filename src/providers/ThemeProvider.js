import { createGlobalStyle } from 'styled-components';

import { COLORS_CONSTANTS } from '../themes/constants';

const mapStyles = ({ theme }) => Object.entries(COLORS_CONSTANTS)
  .map(([key, val]) => `--${val}: ${theme[key]};`)
  .join('\n')

const GlobalStyles = createGlobalStyle`
  :root {
    ${mapStyles}
  }
`;

export const ThemeProvider = ({ children, theme }) => {
  return (
    <>
      <GlobalStyles theme={theme} />
      {children}
    </>
  );
}