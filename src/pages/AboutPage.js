import React from 'react';
import {Paper, Typography} from "@material-ui/core";

const AboutPage = () => {
    document.title = "Joe's App - About"

    return(
        <Paper>
            <Typography variant={'h1'}>About</Typography>
            <Typography>More to see later</Typography>
        </Paper>
    )
}

export default AboutPage;