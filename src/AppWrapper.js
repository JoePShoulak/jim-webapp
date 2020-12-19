import React from 'react';

import _ from 'lodash';
import clsx from 'clsx';

import {useHistory} from "react-router-dom";

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

import theme, {myClasses} from "./theme";
import App from "./App";

const pages = [
    ['Home', 'About', 'Albums', 'Songs', 'Shop / Content']
];

const AppWrapper = () => {
    let history = useHistory();

    let currentPath = history.location.pathname
    currentPath = (currentPath === '/') ? '/home' : currentPath
    let currentPageName = _.capitalize(currentPath.slice(1))

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
                <Toolbar> {/* TODO: CSS doesn't work on Heroku, toolbar doesn't shift */}
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
                        {currentPageName} {/* TODO: Doesn't update until drawer close */}
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
                className={clsx(classes.content, {[classes.contentShift]: open, })}
                onClick={handleDrawerClose} // TODO: This doesn't fill the whole area we want clickable
            >
                <div className={classes.drawerHeader} />

                <App />

            </main>
        </div>
    );
}

export default AppWrapper
