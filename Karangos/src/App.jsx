import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TopBar from './components/ui/TopBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import theme from './utils/theme'
import {ThemeProvider} from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import FooterBar from './components/ui/FooterBar';
import Homepage from './pages/Homepage';
import CustomerList from './pages/CustomersList';

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Box sx={{
            width: '100vw', 
            minHeight: '100vh', 
            backgroundColor: 'background.default'
          }}>
            <TopBar/> 
            <Box sx={{
              margin: '25px 25px 55px 25px',
            }}>
              <Routes>
                <Route path="/" element={<Homepage/>}  />
              </Routes>
              <Routes>
                <Route path="/customers" element={<CustomerList/>}  />
              </Routes>
            </Box>
            <FooterBar sx={{color: 'white'}}/>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
