import React from 'react';

import {
    applyMiddleware,
    createStore } from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/core/styles'

import theme from './theme'
import AppWrapper from "./AppWrapper";
import rootReducer from "./redux/reducers/_rootReducer";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <AppWrapper />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
