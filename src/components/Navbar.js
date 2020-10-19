import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div className={"navbar"}>
            <ul>
                <li><Link className={"link"} to={"/"}>Home</Link></li>
                <li><Link className={"link"} to={"/about"}>About</Link></li>
                <li><Link className={"link"} to={"/fibonacci"}>Fibonacci</Link></li>
                <li><Link className={"link"} to={"/pisano"}>Pisano</Link></li>
                <li><Link className={"link"} to={"/pokemon"}>Pokemon</Link></li>
                <li><Link className={"link"} to={"/weather"}>Weather</Link></li>
            </ul>
        </div>
    )
};

export default Navbar;
