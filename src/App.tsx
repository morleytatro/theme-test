import ThemeProvider from 'providers/ThemeProvider';

import Button from './components/Button';

import defaultTheme from 'themes/default';

import { merge } from 'utils/theme';

const theme = merge(defaultTheme, {
  colors: {
    primary: {
      500: 'red'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click Me!</Button>
    </ThemeProvider>
  );
}

export default App;
