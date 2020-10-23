import {combineReducers} from "redux";
import fibonacciReducer from "./fibonacciReducer";
import pisanoReducer from "./pisanoReducer";
import pokemonReducer from "./pokemonReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
    fibonacciReducer,
    pisanoReducer,
    pokemonReducer,
    weatherReducer
})

export default rootReducer
