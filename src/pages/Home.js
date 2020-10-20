import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";

const Home = () => {
    document.title = "Joe's App - Home";

    return(
        <div className={"page-wrapper"}>
            <Paper align-items={"center"}>
                <Typography variant={'h1'}>Coming soon</Typography>
                <Typography variant={'p'}>More to see later</Typography>
                <br />
                <Button variant={"outlined"} color={"secondary"}>This is our first button</Button>
            </Paper>
        </div>
    )
}

export default Home;
