import React from 'react';

const PokemonSprites = (props) => {

    const s = props.pokemon.sprites

    return (<div>
            <img src={s.front_default} alt={""}/>
            <img src={s.back_default}  alt={""}/>
            <img src={s.front_shiny}   alt={""}/>
            <img src={s.back_shiny}    alt={""}/>
        </div>
    )
}

export default PokemonSprites;

