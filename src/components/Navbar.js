import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = () => {
    return(
        <AppBar position={'static'} color={'secondary'}>
            <Toolbar />
        </AppBar>
    )
};

export default Navbar;
