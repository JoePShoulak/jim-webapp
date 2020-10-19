import React from 'react';
import PokemonHandler from "../components/pokemon/PokemonHandler";

const Pokemon = () => {
    document.title = "Joe's App - PokemonHandler"

    return(
        <div className={"page-wrapper"}>
            <h1>Pokemon</h1>
            <PokemonHandler />
        </div>
    )
}

export default Pokemon;
