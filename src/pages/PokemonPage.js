import React from 'react';
import Pokemon from "../components/pokemon/Pokemon";
import Paper from "@material-ui/core/Card";
import {Typography} from "@material-ui/core";

const PokemonPage = () => {
    document.title = "Joe's App - Pokemon"

    return(
        <Paper>
            <Typography variant={'h1'}>Pokemon</Typography>
            <Pokemon />
        </Paper>
    )
}

export default PokemonPage;
