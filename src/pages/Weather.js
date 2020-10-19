import React from 'react';
import WeatherApplet from "../components/weather/WeatherApplet";

const Weather = () => {
    document.title = "Joe's App - Weather";

    return(
        <div className={"page-wrapper"}>
            <h1>Weather</h1>
            <WeatherApplet />
        </div>
    )
}

export default Weather;
