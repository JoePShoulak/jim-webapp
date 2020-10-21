import React from 'react';

import {Card, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import {Link} from "react-router-dom";

import {myClasses} from "../theme";


const Footer = () => {
    const classes = myClasses();

    return(
        <Card className={classes.main}>
            <CardContent>
                <ul>
                    <li><Link className={"link"} to={"/"}>Home</Link></li>
                    <li><Link className={"link"} to={"/about"}>About</Link></li>
                    <li><Link className={"link"} to={"/fibonacci"}>Fibonacci</Link></li>
                    <li><Link className={"link"} to={"/pisano"}>Pisano</Link></li>
                    <li><Link className={"link"} to={"/pokemon"}>Pokemon</Link></li>
                    <li><Link className={"link"} to={"/weather"}>Weather</Link></li>
                </ul>
                <br />
                <Typography align={'center'}>A Joe Shoulak WebApp running on Node.js</Typography>
            </CardContent>
        </Card>
    )
};

export default Footer;
