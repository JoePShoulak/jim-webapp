import React from 'react';
import {formatPokeData} from "../../helpers/formatHelper";

const Data = (props) => {

    const p = props.pokemon;
    const type = props.type;

    console.log(p)
    switch (type) {
        case "ABILITIES":
            return(
                <div>
                    <h3>Abilities</h3>
                    {p.abilities.map((a) => {
                        return <p key={a.ability.name}>{formatPokeData(a.ability.name)} {a.is_hidden && "(hidden)"}</p>
                    })}
                </div>
            )
        case "STATS":
            return(
                <div>
                    <h3>Stats</h3>
                    {p.stats.map((s) => {
                        return <p key={s.stat.name}>{formatPokeData(s.stat.name)}: {s.base_stat}</p>
                    })}
                </div>
            )
        case "TYPE(S)":
            return(
                <div>
                    <h3>Type(s)</h3>
                    {p.types.map((t) => {
                        return <p key={t.type.name}>{formatPokeData(t.type.name)}</p>
                    })}
                </div>
            )
        case "FIRST-VERSION":
            return(
                <div>
                    <h3>First Generation Available</h3>
                    <h3>{formatPokeData(p.game_indices[0].version.name)}</h3>
                    <h4>Original Local Pokedex Number: {(p.game_indices[0].game_index)}</h4>
                </div>
            )
        default:
            return <h3>Nothing to see here</h3>;
    }
}

export default Data;

