import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Sprites from "./Sprites";
import Data from "./Data";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState(undefined);
    const [dataType, setDataType] = useState("ABILITIES")

    const name = props.name;

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
            const response = res.data;
            setPokemon(response);
        })
    }, [name]);

    return (
        <div>
            {pokemon && [pokemon].map( (el) => {
                return(
                    <div key={el.name}>
                        <Sprites pokemon={el}/>

                        <button onClick={() => {setDataType("ABILITIES")}}>Abilities</button>
                        <button onClick={() => {setDataType("STATS")}}>Stats</button>
                        <button onClick={() => {setDataType("TYPE(S)")}}>Type(s)</button>

                        <Data pokemon={el} type={dataType} />
                    </div>
                )
            })
            }
        </div>
    )
}

export default Pokemon;

