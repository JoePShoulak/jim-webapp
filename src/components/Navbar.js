import React from 'react';
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";

const Navbar = () => {
    return(
        <Card>
            <CardContent>
                <ul>
                    <li><Link className={"link"} to={"/"}>Home</Link></li>
                    <li><Link className={"link"} to={"/about"}>About</Link></li>
                    <li><Link className={"link"} to={"/fibonacci"}>Fibonacci</Link></li>
                    <li><Link className={"link"} to={"/pisano"}>Pisano</Link></li>
                    <li><Link className={"link"} to={"/pokemon"}>Pokemon</Link></li>
                    <li><Link className={"link"} to={"/weather"}>Weather</Link></li>
                </ul>
            </CardContent>
        </Card>
    )
};

export default Navbar;
