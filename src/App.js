import React from 'react';

import {Switch, Route, Redirect} from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import MainContent, {content} from "./MainContent";
import {useHistory} from "react-router";

import _ from 'lodash'

const pages = Object.keys(content)

function App() {

    let history = useHistory()
    let currentPath = history.location.pathname
    currentPath = currentPath.slice(1)
    if (currentPath === '') {
        currentPath = 'home'
    }
    currentPath = _.capitalize(currentPath)
    document.title = `Jim's App - ${currentPath}`;

    return (
        <>
            <Grid container alignItems={'center'} justify={'center'} style={{minWidth: 300}}>
                <Grid item xs={12} align={'center'}>
                    <Switch>
                        {pages.map((page) => {
                            const url = ((page === 'home') ? ('/') : (`/${page}`))
                            return (
                                <Route exact key={page} path={url}>
                                    <MainContent title={page}/>
                                </Route>
                            )
                        })
                        }
                        <Redirect to={"/"}/>
                    </Switch>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
