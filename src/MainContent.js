import React from 'react';

import FibonacciApplet from "./components/fibonacci/FibonacciApplet";
import PisanoApplet from "./components/pisano/PisanoApplet";
import PokemonApplet from "./components/pokemon/PokemonApplet";
import WeatherApplet from "./components/weather/WeatherApplet";
import HomeApplet from "./components/home/HomeApplet";
import AboutApplet from "./components/about/AboutApplet";

const content = {
    'home': <HomeApplet />,
    'about': <AboutApplet />,
    'fibonacci': <FibonacciApplet />,
    'pisano': <PisanoApplet />,
    'pokemon': <PokemonApplet />,
    'weather': <WeatherApplet />,
}

const MainContent = (props) => {
    return content[props.title]
}

export default MainContent;
export {content}
