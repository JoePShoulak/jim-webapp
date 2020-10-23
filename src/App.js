import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import MainContent, {content} from "./components/MainContent";

const pages = Object.keys(content)

function App() {

    return (
        <>
            <Grid container justify={'center'} style={{minWidth: 500}}>
                <Grid item xs={8} align={'center'}>
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
