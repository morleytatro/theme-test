import { createGlobalStyle } from 'styled-components';

import { getVariables } from 'utils/variables';

export default function ThemeProvider({ children, theme }) {
  const GlobalStyles = createGlobalStyle`:root{${getVariables(theme).join(';') + ';}'}`;

  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}