import React, {useEffect, useState} from 'react';
import axios from "axios";

const WeatherApplet = () => {
    const [weather, setWeather] = useState(undefined);

    useEffect( () => {
        axios.get(`http://localhost:5000/getWeather`).then((res) => {
            const response = res.data;

            setWeather(response);
        })
    }, []);

    return(
        <div>
            {(weather !== undefined) ? (
                <>
                    {console.log(weather)}
                    <p key={"temp"}          > The temp is: {          weather.temperature}F</p>
                    <p key={"feels_like"}    > ...but it feels like: { weather.feels_like}F</p>
                    <p key={"wind_speed"}    > The wind speed is: {    weather.wind_speed}Mph</p>
                    <p key={"humidity"}      > The humidity is: {      weather.humidity}%</p>
                    <p key={"precipitation"} > Precipitation: {        weather.precipitation}</p>
                    <p key={"cloud_cover"}   > Cloud Cover: {          weather.cloud_cover}</p>
                </>
            ) : <p key={"loading"}>Loading...</p>}
        </div>
    )
}

export default WeatherApplet;
