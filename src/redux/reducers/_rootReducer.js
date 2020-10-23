import {combineReducers} from "redux";
import fibonacciReducer from "./fibonacciReducer";
import pisanoReducer from "./pisanoReducer";
import pokemonReducer from "./pokemonReducer";
import weatherReducer from "./weatherReducer";
import snackbarReducer from "./snackbarReducer";

const rootReducer = combineReducers({
    fibonacciReducer,
    pisanoReducer,
    pokemonReducer,
    weatherReducer,
    snackbarReducer
})

export default rootReducer
