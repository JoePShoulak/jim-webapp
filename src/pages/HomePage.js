import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const HomePage = () => {
    document.title = "Joe's App - HomePage";

    return(
        <Paper>
            <Typography variant={'h1'}>Coming soon</Typography>
            <Typography>Nothing Here</Typography>
        </Paper>
    )
}

export default HomePage;
