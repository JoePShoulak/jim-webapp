import React from 'react';

import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";

import PokemonApplet from "../components/pokemon/PokemonApplet";
import {myClasses} from "../theme";

const PokemonPage = () => {
    document.title = "Joe's App - PokemonApplet"

    const classes = myClasses();

    return(
        <Card className={classes.main}>
            <CardContent>
                <Typography align={'center'} variant={'h1'}>Pokemon</Typography>
                <PokemonApplet />
            </CardContent>
        </Card>
    )
}

export default PokemonPage;
