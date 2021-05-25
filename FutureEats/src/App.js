import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Router from './routes/Router';
import theme from './constants/theme'
import GlobalState from 'global/GlobalState';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router/>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
