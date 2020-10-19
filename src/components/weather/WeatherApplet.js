import React, {useEffect, useState} from 'react';
import axios from "axios";

const WeatherApplet = () => {
    document.title = "Joe's App - Weather";
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
                <div>
                    {console.log(weather)}
                    <p>The temp is: {weather.temperature}F</p>
                    <p>...but it feels like: {weather.feelslike}F</p>
                    <p>The wind speed is: {weather.wind_speed}Mph</p>
                    <p>The humidity is: {weather.humidity}%</p>
                    <p>Precipitation: {weather.precipitation}</p>
                    <p>Cloud Cover: {weather.cloudcover}</p>
                </div>
            ) : <p>Loading...</p>}
        </div>
    )
}

export default WeatherApplet;
