import React, {useEffect} from 'react';

import _ from 'lodash'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import SearchIcon from "@material-ui/icons/Search"
import {Toolbar, TextField, Paper} from "@material-ui/core";

import PokemonAccordion from "./PokemonAccordion";

import {myClasses} from "../../../theme";
import {pokeApi, pokemonSprite} from "../../../helpers/linkHelper";
import {setFilter, setPokemonData} from "../../../redux/actions/pokemonActions";

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
            <Paper style={{minWidth: 250}}>
                <Toolbar
                    style={{
                        padding: 10,
                        justifyContent: 'center'
                    }}>
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
            </Paper>
            <br />

            { Object.keys(pokemonState.data).map((pokemonId) => {
                let meetsFilter = _.includes(pokemonState.data[pokemonId].name, pokemonState.filter)
                meetsFilter = meetsFilter || (pokemonState.filter === '')
                return meetsFilter && (
                    <PokemonAccordion key={pokemonId} pokemonId={pokemonId} />
                )
            })}
        </>
    );
}

export default PokemonApplet
