import axios from "axios";
import {pokeApi, pokeImage} from "../../helpers/linkHelper";

export const setExpanded = (accordion) => dispatch => {
    dispatch({
        type: "SET_EXPANDED_ACCORDION",
        payload: accordion
    })
}

export const setFilter = (filter) => dispatch => {
    dispatch({
        type: "SET_FILTER",
        payload: filter
    })
}

export const setPokemonData = (data) => dispatch => {
    dispatch({
        type: "SET_POKEMON_DATA",
        payload: data
    })
}

export const setCurrentPokemonData = (id) => dispatch => {
    dispatch({
        type: "SET_CURRENT_POKEMON_DATA",
        payload: undefined
    })
    axios
        .get(`${pokeApi}/${id}`)
        .then(function (response) {
            const data = response.data
            const pokemonData = {
                height: data.height,
                types: data.types,
                imageUrl: `${pokeImage}/${data.id}.png`
            }
            console.log(pokemonData)
            dispatch({
                type: "SET_CURRENT_POKEMON_DATA",
                payload: pokemonData
            })
        })
}



