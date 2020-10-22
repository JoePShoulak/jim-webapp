import React, {useEffect, useState} from 'react';
import axios from "axios";

import {Card} from "@material-ui/core";
import {CardContent} from "@material-ui/core";
import {Typography} from "@material-ui/core";

// TODO: Implement redux error/loading handling, Material UI snack bar

const WeatherApplet = () => {
    const [weather, setWeather] = useState(undefined);

    useEffect( () => {
        axios.get(`http://localhost:5000/getWeather`).then((res) => {
            const response = res.data;

            setWeather(response);
        })
    }, []);

    return(
        <Card>
            {(weather !== undefined) ? (
                <CardContent>
                    <Typography key={"temp"}          > The temp is: {          weather.temperature}F</Typography>
                    <Typography key={"feels_like"}    > ...but it feels like: { weather.feels_like}F</Typography>
                    <Typography key={"wind_speed"}    > The wind speed is: {    weather.wind_speed}Mph</Typography>
                    <Typography key={"humidity"}      > The humidity is: {      weather.humidity}%</Typography>
                    <Typography key={"precipitation"} > Precipitation: {        weather.precipitation}</Typography>
                    <Typography key={"cloud_cover"}   > Cloud Cover: {          weather.cloud_cover}</Typography>
                </CardContent>
            ) : (
                <CardContent>
                    <Typography>Loading</Typography>
                </CardContent>
            )
            }
        </Card>
    )
}

export default WeatherApplet;
