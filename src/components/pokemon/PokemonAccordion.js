import React from 'react'

import _ from 'lodash'

import {useDispatch, useSelector} from "react-redux";

import { Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PokemonDetails from "./PokemonDetails";

import {myClasses} from "../../theme";
import {setCurrentPokemonData, setExpanded} from "../../redux/actions/pokemonActions";

const PokemonAccordion = (props) => {
    const classes = myClasses()

    const dispatch = useDispatch();
    const pokemonState = useSelector((state) => state.pokemonReducer)

    const handleChange = (panel) => (event, isExpanded) => {
        dispatch(setExpanded(isExpanded ? panel : false));
    };
    const id = props.pokemonId
    const pokemon = pokemonState.data[id]

    const isExpanded = pokemonState.expandedAccordion === id

    return(
        <>
            <Accordion
                expanded={isExpanded}
                onChange={handleChange(id)}
                style={{
                    minWidth: 300,
                    maxWidth: 800,
                    paddingLeft: 20,
                    paddingRight: 20
                }}
                onClick={() => {dispatch(setCurrentPokemonData(id))}}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography
                        variant={'h6'}
                        className={classes.pokemonName}>{_.capitalize(pokemon.name)}</Typography>
                    <div style={{
                        marginRight: 0,
                        textAlign: 'right',
                        width: '100%'
                    }}>
                        <img alt={pokemon.name}
                             src={pokemon.spriteLink}
                        />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {isExpanded && <PokemonDetails/>}
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default PokemonAccordion;
