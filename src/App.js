import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent, {content} from "./components/MainContent";

const pages = Object.keys(content)

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Grid container justify={'center'}>
                <Grid item xs={8}>
                    <Switch>
                        {
                            pages.map((page) => {
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
            <Footer />
        </BrowserRouter>
    );
}

export default App;
