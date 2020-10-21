import React from 'react';

import {Card, CardContent} from "@material-ui/core";

import {myClasses} from "../theme";
import Typography from "@material-ui/core/Typography";

const AboutPage = () => {
    document.title = "Joe's App - About"

    const classes = myClasses();

    return(
        <Card className={classes.main}>
            <CardContent>
                <Typography align={'center'}  variant={'h1'}>About</Typography>
                <br />
                <Typography align={'center'} >Nothing Here</Typography>
            </CardContent>
        </Card>
    )
}

export default AboutPage;
