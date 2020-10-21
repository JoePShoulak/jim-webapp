import React from 'react';

import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";

import WeatherApplet from "../components/weather/WeatherApplet";
import {myClasses} from "../theme";

const WeatherPage = () => {
    document.title = "Joe's App - WeatherPage";

    const classes = myClasses();

    return(
        <Card className={classes.main}>
            <CardContent>
                <Typography align={'center'} variant={'h1'}>Weather</Typography>
                <WeatherApplet />
            </CardContent>
        </Card>
    )
}

export default WeatherPage;
