import './App.css'
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
import CustomersList from './pages/CustomersList';
import CustomersForm from './pages/CustomersForm';

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
                <Route path="/customers" element={<CustomersList/>}  />
                <Route path="/customers/new" element={<CustomersForm/>}  />
                <Route path="/customers/:id" element={<CustomersForm/>}  />
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
