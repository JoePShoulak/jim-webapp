import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/core/styles'

import theme from './theme'
import AppWrapper from "./AppWrapper";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <AppWrapper/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);
