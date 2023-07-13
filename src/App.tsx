import React, {useState} from 'react';
import './App.css';
import { Box, Grid } from '@mui/material';
import Body from './components/Body';
import ThemeContext from './contexts/ThemeContext';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SwitchForTheme from './components/SwitchForTheme';

interface ThemeContextProps {
  isDarkMode : boolean;
  setIsDarkMode : React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const value : ThemeContextProps = { isDarkMode, setIsDarkMode };
  const myTheme = createTheme({
    palette : {
      mode : isDarkMode ? 'dark' : 'light'
    }
  });

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Box sx={{ mx:'auto' }}>
          <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
              <div className='wrapper'>
                <header>React Basics</header>
                <h1>
                  Hi this is test
                </h1>
              </div>
              <Body/>
              <SwitchForTheme/>
            </Grid>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
