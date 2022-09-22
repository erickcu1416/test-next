import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0075FF',
        },
        secondary: {
            main: '#414141',
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: '#000',
            secondary: '#fff',
        }
    },
});

export default theme;
