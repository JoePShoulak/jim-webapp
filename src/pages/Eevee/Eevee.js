import React from 'react';
import Pokemon from "../../components/Pokemon";

const Eevee = () => {
    document.title = "Joe's App - Eevee"

    return(
        <div className={"page-wrapper"}>
            <h1>Eevee</h1>
            <Pokemon pokemon={"Eevee"}/>
        </div>
    )
}

export default Eevee;
