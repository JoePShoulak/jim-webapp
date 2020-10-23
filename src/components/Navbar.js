import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {useHistory} from "react-router";
import {content} from "./MainContent";
import _ from 'lodash'

const pages = Object.keys(content)

const Navbar = () => {
    const history = useHistory()

    const goTo = (path) => {
        history.push(path)
    }

    return(
        <AppBar position={'static'} color={'secondary'}>
            <Toolbar>
                <Tabs centered style={{width: '100%'}}>
                    {
                        pages.map((page) => {
                            const path = (page === 'home') ? ('/') : `${page}`
                            return <Tab key={page} label={_.capitalize(page)} onClick={() => {goTo(path)}}/>
                        })
                    }
                </Tabs>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;
