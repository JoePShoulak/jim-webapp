import {combineReducers} from "redux";
import FibonacciReducer from "./fibonacciReducer";
import PisanoReducer from "./pisanoReducer";
import PokemonReducer from "./pokemonReducer";

const rootReducer = combineReducers({
    FibonacciReducer,
    PisanoReducer,
    PokemonReducer
})

export default rootReducer
