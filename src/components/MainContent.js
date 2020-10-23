import React from 'react';

import {CardContent, Typography} from "@material-ui/core";
import {myClasses} from "../theme";
import _ from 'lodash';
import Card from "@material-ui/core/Card";

import FibonacciApplet from "./applets/fibonacci/FibonacciApplet";
import PisanoApplet from "./applets/pisano/PisanoApplet";
import PokemonApplet from "./applets/pokemon/PokemonApplet";
import WeatherApplet from "./applets/weather/WeatherApplet";
import HomeApplet from "./applets/home/HomeApplet";
import AboutApplet from "./applets/about/AboutApplet";

const content = {
    'home': <HomeApplet />,
    'about': <AboutApplet />,
    'fibonacci': <FibonacciApplet />,
    'pisano': <PisanoApplet />,
    'pokemon': <PokemonApplet />,
    'weather': <WeatherApplet />,
}

const MainContent = (props) => {
    const title = props.title;
    document.title = `Joe's App - ${_.capitalize(title)}`;

    const classes = myClasses();

    return(
        <Card className={classes.main} style={{minWidth: 450}}>
            <CardContent>
                <Typography align={'center'} variant={'h1'}>{_.capitalize(title)}</Typography>
                {content[title]}
            </CardContent>
        </Card>
    )
}

export default MainContent;
export {content}
