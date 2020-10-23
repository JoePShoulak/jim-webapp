import React from 'react';

import {useDispatch, useSelector} from "react-redux";

import {Switch, Route, Redirect} from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import MainContent, {content} from "./MainContent";
import {setSnackbar} from "./redux/actions/snackbarActions";

const pages = Object.keys(content)

function App() {
    const dispatch = useDispatch();
    const snackbarState = useSelector((state) => state.snackbarReducer)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(setSnackbar(false, snackbarState.type, snackbarState.message));
    };

    return (
        <>
            <Grid container alignItems={'center'} justify={'center'} style={{minWidth: 300}}>
                <Grid item xs={12} align={'center'}>
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
                    <Snackbar open={snackbarState.open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={snackbarState.type}>
                            {snackbarState.message}
                        </Alert>
                    </Snackbar>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
