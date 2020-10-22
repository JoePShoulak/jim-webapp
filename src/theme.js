import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fade} from "@material-ui/core"

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

        MuiAccordion: {
            root: {
                background: '#494949',
            },
        },

        MuiToolbar: {
            root: {
                background: '#494949',
            },
        },
    }
});

const myClasses = makeStyles(theme => ({
    main: {
        background: '#424242',
        marginTop: 20,
        marginBottom: 20,
        display: 'center',
    },
    cardMedia: {
        margin: 'auto'
    },

    pokemonName: {
        fontWeight: 'bold',
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    pokemonToolbar: {
        margin: 15
    },

    searchContainer: {
        display: 'flex',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },

    searchIcon: {
        alignSelf: 'flex-end',
        marginBottom: 15,
    },

    searchInput: {
        width: 200,
        marginLeft: 10,
        marginBottom: 15,
    }


}))

export {myClasses}
export default theme;
