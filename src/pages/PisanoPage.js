import React from "react";
import Pisano from "../components/pisano/Pisano"
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

const PisanoPage = () => {

    document.title = "Joe's App - PisanoPage"

    return(
        <Paper>
            <Typography variant={'h1'}>Pisano</Typography>
            <Pisano />
        </Paper>
    )
}

export default PisanoPage;
