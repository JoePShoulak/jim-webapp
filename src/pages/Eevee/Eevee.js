import React from 'react';
import Pokemon from "../../components/pokemon/Pokemon";

const Eevee = () => {
    document.title = "Joe's App - Eevee"

    return(
        <div className={"page-wrapper"}>
            <h1>Eevee</h1>
            <Pokemon name={"eevee"}/>
        </div>
    )
}

export default Eevee;
