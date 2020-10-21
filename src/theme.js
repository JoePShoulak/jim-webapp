import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";

const theme = createMuiTheme({
    palette: {
        type: "dark",

        primary: {
            main: '#D00000',
        },

        secondary: {
            main: '#424242'
        }
    },

    overrides: {
        MuiTableCell: {
            root: {
                borderBottom: 'none',
                align: 'center'
            }
        },

        MuiCard: {
            root: {
                background: '#494949',
            },
        },
    }
});

const myClasses = makeStyles({
    main: {
        background: '#424242',
        marginTop: 20,
        marginBottom: 20,
        display: 'center',
    },
    cardMedia: {
        margin: 'auto'
    },

})

export {myClasses}
export default theme;
