import React from 'react';

import _ from 'lodash';
import clsx from 'clsx';

import {
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemText } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import theme, {myClasses} from "../theme";
import {useHistory} from "react-router-dom";

const pages = [
    ['Home', 'About'],
    ['Fibonacci', 'Pisano', 'Pokemon', 'Weather']
];

const NavDrawer = () => {
    let history = useHistory();

    const classes = myClasses()
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const changePage = (path) => {
        const formattedPath = (path === 'Home') ? '/' : `/${_.lowerCase(path)}`
        history.push(formattedPath)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                {pages.map((pageSet, index) => {
                    return (
                        <div key={index}>
                            <Divider />
                            <List>
                                {pageSet.map((page) => {
                                    return(
                                        <ListItem button key={page} onClick={() => {changePage(page)}}>
                                            <ListItemText primary={page} />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </div>
                    )

                })}
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}

export default NavDrawer
