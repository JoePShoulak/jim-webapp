import React from 'react';
import Weather from "../components/weather/Weather";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

const WeatherPage = () => {
    document.title = "Joe's App - WeatherPage";

    return(
        <Paper>
            <Typography variant={'h1'}>Weather</Typography>
            <Weather />
        </Paper>
    )
}

export default WeatherPage;
