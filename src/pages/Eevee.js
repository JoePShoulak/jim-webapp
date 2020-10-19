import React from 'react';
import Pokemon from "../components/eevee/Pokemon";

const Eevee = () => {
    document.title = "Joe's App - Eevee"

    return(
        <div className={"page-wrapper"}>
            <h1>Pokemon</h1>
            <Pokemon />
        </div>
    )
}

export default Eevee;
