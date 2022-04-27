import { useState } from 'react';
import { ThemeProvider } from './providers/ThemeProvider';
import Button from './components/Button';

import { LightTheme } from './themes/light';
import { DarkTheme } from './themes/dark';

const map = {
  light: LightTheme,
  dark: DarkTheme
};

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={map[theme]}>
      <Button>Click Me!</Button>
      <div>
        <select onChange={e => setTheme(e.target.value)} value={theme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </ThemeProvider>
  );
}

export default App;
