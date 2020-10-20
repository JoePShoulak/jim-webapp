import React from "react";
import Array from "../components/pisano/Array"
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

const Pisano = () => {

    document.title = "Joe's App - Pisano"

    return(
        <Paper>
            <Typography variant={'h1'}>Pisano</Typography>
            <Array />
        </Paper>
    )
}

export default Pisano;
