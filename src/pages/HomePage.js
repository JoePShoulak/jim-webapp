import React from 'react';

import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";

import {myClasses} from "../theme";

const HomePage = () => {
    document.title = "Joe's App - HomePage";

    const classes = myClasses();

    return(
        <Card className={classes.main}>
            <CardContent>
                <Typography align={'center'} variant={'h1'}>Home</Typography>
                <br />
                <Typography align={'center'} >Nothing Here</Typography>
            </CardContent>
        </Card>
    )
}

export default HomePage;
