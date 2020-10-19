import React from 'react';

const Data = (props) => {

    const p = props.pokemon;
    const type = props.type;

    console.log(type)
    switch (type) {
        case "ABILITIES":
            return(
                <div>
                    <h3>Abilities</h3>
                    {p.abilities.map((a) => {
                        return <p key={a.ability.name}>{a.ability.name} {a.is_hidden && "(hidden)"}</p>
                    })}
                </div>
            )
        case "STATS":
            return(
                <div>
                    <h3>Stats</h3>
                    {p.stats.map((s) => {
                        return <p key={s.stat.name}>{s.stat.name} {s.base_stat}</p>
                    })}
                </div>            )
        default:
            return <h3>Nothing to see here</h3>;
    }
}

export default Data;

