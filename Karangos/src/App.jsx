import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TopBar from './components/ui/TopBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import theme from './utils/theme'
import {ThemeProvider} from '@mui/material/styles';
import { Box } from '@mui/material';
import FooterBar from './components/ui/FooterBar';

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box sx={{
            width: '100vw', 
            height: '100vh', 
            backgroundColor: 'background.default'
          }}>
            <TopBar/> 
            <FooterBar sx={{color: 'white'}}/>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
