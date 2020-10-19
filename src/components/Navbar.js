import React from 'react';
import {Link} from "react-router-dom";

// const Navbar = () => {
//     return(
//         <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
//             <div id="navbarBasicExample" className="navbar-menu">
//                 <div className="navbar-start">
//                     <Link className={"navbar-item"} exact to="/">Home</Link>
//                     <Link className={"navbar-item"} to={"/about"}>About</Link>
//
//                     <div className="navbar-item has-dropdown is-hoverable">
//                         <a className="navbar-link">Tools</a>
//
//                         <div className="navbar-dropdown">
//                             <Link className={"navbar-item"} to={"/fibonacci"}>Fibonacci</Link>
//                             <Link className={"navbar-item"} to={"/pisano"}>Pisano</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// };

const Navbar = () => {
    return(
        <div className={"navbar"}>
            <ul>
                <li><Link className={"link"} exact to={"/"}>Home</Link></li>
                <li><Link className={"link"} to={"/about"}>About</Link></li>
                <li><Link className={"link"} to={"/fibonacci"}>Fibonacci</Link></li>
                <li><Link className={"link"} to={"/pisano"}>Pisano</Link></li>
            </ul>
        </div>
    )
};

export default Navbar;
