import {fade} from "@material-ui/core"

import {createMuiTheme, makeStyles} from "@material-ui/core/styles";

const drawerWidth = 135;

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
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },


}))

export {myClasses}
export default theme;
