import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
    return(
        <div className={"navbar"}>
            <ul>
                <li><Link className={"link"} to="/">Home</Link></li>
                <li><Link className={"link"} to={"/about"}>Pisano</Link></li>
            </ul>
        </div>
    )
};

export default Navbar;
