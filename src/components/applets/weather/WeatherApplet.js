import React, {useEffect, useState} from 'react';
import axios from "axios";

import {Card} from "@material-ui/core";
import {CardContent} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {weatherApi} from "../../../helpers/linkHelper";

const WeatherApplet = () => {
    const [weather, setWeather] = useState(undefined);

    useEffect( () => {
        axios.get(weatherApi).then((res) => {
            const response = res.data.current;

            setWeather(response);
        })
    }, []);

    return(
        <Card style={{maxWidth: 300}}>
            {(weather !== undefined) ? (
                <CardContent>
                    <Typography key={"temp"}          > The temp is: {          weather.temperature}F</Typography>
                    <Typography key={"feels_like"}    > ...but it feels like: { weather.feelslike}F</Typography>
                    <Typography key={"wind_speed"}    > The wind speed is: {    weather.windspeed}Mph</Typography>
                    <Typography key={"humidity"}      > The humidity is: {      weather.humidity}%</Typography>
                    <Typography key={"precipitation"} > Precipitation: {        weather.precip}</Typography>
                    <Typography key={"cloud_cover"}   > Cloud Cover: {          weather.cloudcover}</Typography>
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
