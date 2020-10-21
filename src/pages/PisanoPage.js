import React from "react";

import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";

import PisanoApplet from "../components/pisano/PisanoApplet"
import {myClasses} from "../theme";

const PisanoPage = () => {

    document.title = "Joe's App - PisanoPage"

    const classes = myClasses();

    return(
        <Card className={classes.main}>
            <CardContent>
                <Typography align={'center'} variant={'h1'}>Pisano</Typography>
                <PisanoApplet />
            </CardContent>
        </Card>
    )
}

export default PisanoPage;
