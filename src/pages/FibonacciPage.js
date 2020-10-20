import React from 'react';
import Fibonacci from "../components/fibonacci/Fibonacci";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const FibonacciPage = () => {
    document.title = "Joe's App - FibonacciPage"

    return(
        <Paper>
            <Typography variant={'h1'}>Fibonacci</Typography>
            <Fibonacci />
        </Paper>
    )
}

export default FibonacciPage;
