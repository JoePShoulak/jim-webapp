import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import MainContent, {content} from "./components/MainContent";
import NavDrawer from "./components/NavDrawer";

const pages = Object.keys(content)

function App() {

    return (
        <>
            <NavDrawer/>
            <Grid container justify={'center'}>
                <Grid item xs={8}>
                    <Switch>
                        {   pages.map((page) => {
                            const url = ((page === 'home') ? ('/') : (`/${page}`))
                            return (
                                <Route exact key={page} path={url}>
                                    <MainContent title={page} />
                                </Route>
                            )
                        })
                        }
                        <Redirect to={"/"} />
                    </Switch>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
