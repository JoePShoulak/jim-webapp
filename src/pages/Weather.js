import React from 'react';
import WeatherApplet from "../components/weather/WeatherApplet";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

const Weather = () => {
    document.title = "Joe's App - Weather";

    return(
        <Paper>
            <Typography variant={'h1'}>Weather</Typography>
            <WeatherApplet />
        </Paper>
    )
}

export default Weather;
