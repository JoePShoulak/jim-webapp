import React from 'react';

import {Typography} from "@material-ui/core";
import {Card, CardContent} from "@material-ui/core";

import FibonacciApplet from "../components/fibonacci/FibonacciApplet";
import {myClasses} from "../theme";

const FibonacciPage = () => {
    document.title = "Joe's App - FibonacciPage"

    const classes = myClasses();

    return(
        <Card className={classes.main}>
            <CardContent>
                <Typography align={'center'} variant={'h1'}>Fibonacci</Typography>
                <FibonacciApplet />
            </CardContent>
        </Card>
    )
}

export default FibonacciPage;
