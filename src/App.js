import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Homepage from './Dashboard/Homepage'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Box className="App">
        <Homepage/>
      </Box>
  </ThemeProvider>
  );
}

export default App;
