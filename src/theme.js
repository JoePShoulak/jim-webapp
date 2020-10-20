import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    palette: {
        type: "dark",

        primary: {
            main: '#D00000',
        },
    },

    overrides: {
        MuiTableCell: {
            root: {
                borderBottom: 'none',
                align: 'center'
            }
        }
    }
});

export default theme;
