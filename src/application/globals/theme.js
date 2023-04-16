import { createTheme } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const Theme = () => {
    const theme = createTheme({
        palette: {
            yellow: {
                main: yellow[500],
            },
            black: {
                main: '#000000',
            },
            white: {
                main: '#ffffff',
            },
        },
    });

    return theme;
}

export default Theme;
