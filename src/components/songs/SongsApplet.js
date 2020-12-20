import React from 'react';

import {
    Card,
    CardContent,
    Typography } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

import paradiseBay from './audioFiles/10 Paradise Bay.m4a'

const SongsApplet = () => {

    return(
        <Card>
            <CardContent>
                <Typography>Paradise Bay</Typography>
                <AudioPlayer src={paradiseBay} />
            </CardContent>
        </Card>
    );
};

export default SongsApplet;
