import { createTheme } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const Theme = () => {
    const theme = createTheme({
        palette: {
            yellow: {
                main: '#FFD600',
            },
            black: {
                main: '#000000',
            },
            white: {
                main: '#ffffff',
            },
            grey: {
                main: '#858585',
            }
        },
    });

    return theme;
}

export default Theme;
