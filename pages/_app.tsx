import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import Header from '../src/Header';
import SubHeader from '../src/SubHeader';
import { wrapper } from '../redux/store';
import { useSelector } from 'react-redux';
import { selectHeaderName } from '../redux/slice/headerSlice';
import Footer from '../src/Footer';
import { Box, Container } from '@mui/material';
import { selectLoader } from '../redux/slice/loaderSlice';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function MyApp({ Component, pageProps }: AppProps) {
  const headerName = useSelector(selectHeaderName);
  const loader = useSelector(selectLoader);

  return (

    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <SubHeader>
            {headerName}
          </SubHeader>
          <Container component="main" maxWidth="xl">
            {loader ? 'Loading...' : ''}
            <Component {...pageProps} />
          </Container>
          <Footer />
        </Box>
        <CssBaseline />
      </ThemeProvider>
    </LocalizationProvider> 
  );
}

export default wrapper.withRedux(MyApp);


