import React from 'react';
import Counter from "../components/fibonacci/Counter";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const Fibonacci = () => {
    document.title = "Joe's App - Fibonacci"

    return(
        <Paper>
            <Typography variant={'h1'}>Weather</Typography>
            <Counter />
        </Paper>
    )
}

export default Fibonacci;
