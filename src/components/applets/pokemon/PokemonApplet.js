import React, {useEffect} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import PokemonAccordion from "./PokemonAccordion";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setFilter, setPokemonData} from "../../../redux/actions/pokemonActions";
import {pokeApi, pokemonSprite} from "../../../helpers/linkHelper";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search"
import {myClasses} from "../../../theme";
import Card from "@material-ui/core/Card";
import _ from 'lodash'

const PokemonApplet = () => {
    const dispatch = useDispatch();
    const pokemonState = useSelector((state) => state.pokemonReducer)

    const classes = myClasses()

    useEffect(() => {
        axios
            .get(`${pokeApi}?limit=893`)
            .then(function (response) {
                const {data} = response;
                const {results} = data;
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index+1,
                        name: pokemon.name,
                        spriteLink: `${pokemonSprite}/${index+1}.png`
                    }
                })
                dispatch(setPokemonData(newPokemonData))
            })
    }, [dispatch])

    return (
        <>
            <br />
            <Card>
                <Toolbar
                    className={classes.pokemonToolbar} style={{justifyContent: 'center'}}>
                    <div className={classes.searchContainer}>
                        <SearchIcon className={classes.searchIcon}/>
                        <TextField
                            className={classes.searchInput}
                            label={'Pokemon'}
                            variant={'standard'}
                            onChange={(e) => {
                                dispatch(setFilter(e.target.value))
                            }}
                            />
                    </div>
                </Toolbar>
            </Card>
            <br />

            { Object.keys(pokemonState.data).map((pokemonId) => {
                const meetsFilter = _.includes(pokemonState.data[pokemonId].name, pokemonState.filter)
                return (meetsFilter || (pokemonState.filter === '')) && (
                    <PokemonAccordion key={pokemonId} pokemonId={pokemonId} />
                )
            })}
        </>
    );
}

export default PokemonApplet
