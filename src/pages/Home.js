import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const Home = () => {
    document.title = "Joe's App - Home";

    return(
        <Paper>
            <Typography variant={'h1'}>Coming soon</Typography>
            <Typography>Nothing Here</Typography>
        </Paper>
    )
}

export default Home;
