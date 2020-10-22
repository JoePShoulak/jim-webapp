const defaultState = {
    currentPokemonData: [],
    data: [],
    expandedAccordion: undefined,
    filter: ''
}

const PokemonReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_EXPANDED_ACCORDION":
            return {
                ...state,
                expandedAccordion: action.payload
            }
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload
            }
        case "SET_POKEMON_DATA":
            return {
                ...state,
                data: action.payload
            }
        case "SET_CURRENT_POKEMON_DATA":
            return {
                ...state,
                currentPokemonData: action.payload
            }
        default:
            return state;
    }
}

export default PokemonReducer;
