import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Sprites from "./Sprites";
import Data from "./Data";
import _ from 'lodash';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(undefined);
    const [dataType, setDataType] = useState("ABILITIES");
    const [name, setName] = useState("eevee");

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
            const response = res.data;
            setPokemon(response);
        })
    }, [name]);

    const randomPokemon = () => {
        return Math.floor(Math.random()*1050)
    }

    return (
        <div>
            {pokemon && (<h2>{_.capitalize(pokemon.name)}</h2>)}

            {pokemon && [pokemon].map( (el) => {
                return(
                    <div key={el.name}>
                        <Sprites pokemon={el}/>

                        <button onClick={() => {setDataType("ABILITIES")}}>Abilities</button>
                        <button onClick={() => {setDataType("STATS")}}>Stats</button>
                        <button onClick={() => {setDataType("TYPE(S)")}}>Type(s)</button>
                        <button onClick={() => {setDataType("FIRST-VERSION")}}>First Available Version</button>
                        <button onClick={() => {setName(String(randomPokemon()))}}>Random Pokemon</button>

                        <Data pokemon={el} type={dataType} />
                    </div>
                )
            })
            }
        </div>
    )
}

export default Pokemon;

