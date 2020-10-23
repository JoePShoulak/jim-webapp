import React from 'react';

import FibonacciApplet from "./applets/fibonacci/FibonacciApplet";
import PisanoApplet from "./applets/pisano/PisanoApplet";
import PokemonApplet from "./applets/pokemon/PokemonApplet";
import WeatherApplet from "./applets/weather/WeatherApplet";
import HomeApplet from "./applets/home/HomeApplet";
import AboutApplet from "./applets/about/AboutApplet";
import TestApplet from "./applets/test/TestApplet";

const content = {
    'home': <HomeApplet />,
    'about': <AboutApplet />,
    'fibonacci': <FibonacciApplet />,
    'pisano': <PisanoApplet />,
    'pokemon': <PokemonApplet />,
    'weather': <WeatherApplet />,
    'test': <TestApplet />
}

const MainContent = (props) => {
    const title = props.title;
    // document.title = `Joe's App - ${_.capitalize(title)}`;

    return content[title]
}

export default MainContent;
export {content}
