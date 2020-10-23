import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import _ from 'lodash'
import {myClasses} from "../../../theme";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPokemonData, setExpanded} from "../../../redux/actions/pokemonActions";
import PokemonDetails from "./PokemonDetails";

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
                style={{minWidth: 300}}
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
