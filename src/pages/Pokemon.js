import React from 'react';
import PokemonHandler from "../components/pokemon/PokemonHandler";
import Paper from "@material-ui/core/Card";

const Pokemon = () => {
    document.title = "Joe's App - PokemonHandler"

    return(
        <Paper>
            <h1>Pokemon</h1>
            <PokemonHandler />
        </Paper>
    )
}

export default Pokemon;
