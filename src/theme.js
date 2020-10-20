import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: red[250],
            main: red[500],
            dark: red[750],
            contrastText: '#fff'
        },
        secondary: {
            light: orange[250],
            main: orange[500],
            dark: orange[750],
            contrastText: '#fff'
        },
    },
});

export default theme;
