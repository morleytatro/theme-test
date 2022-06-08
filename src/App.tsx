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

// const themeFromScratch = {
//   colors: {
//     primary: {
//       50: 'blue',
//       500: 'red',
//       // ...
//     },
//   },
//   spacings: {
//     x: '.25rem',
//     s: '.5rem',
//     m: '.75rem',
//     l: '1rem',
//   }
// };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click Me!</Button>
    </ThemeProvider>
  );
}

export default App;
