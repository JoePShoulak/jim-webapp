import {useSelector} from "react-redux";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";
import React from "react";

const PokemonDetails = () => {
    const pokemonState = useSelector((state) => state.PokemonReducer)

    const pokemon = pokemonState.currentPokemonData

    return (
        !_.isEmpty(pokemonState.currentPokemonData) && (
            <div style={{width: '100%'}}>
                <div style={{textAlign: 'center'}}>
                    <img
                        src={pokemon.imageUrl}
                        alt={pokemon.name}
                        style={{
                            maxHeight: 300,
                            maxWidth: 300,
                            margin: 'auto'
                        }}
                    />
                    <br />
                    <br />
                </div>
                <Typography variant={'h6'}> Height: {pokemon.height} </Typography>
                <Typography variant={'h6'}> Type(s): {
                    _.join(pokemon.types.map((type) => {
                        return _.capitalize(type.type.name)
                    }), ', ')
                } </Typography>
            </div>)
    )
}

export default PokemonDetails
