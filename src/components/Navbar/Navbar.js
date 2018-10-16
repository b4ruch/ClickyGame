/* 
***********************************************
*Author: Baruch Flores                        *
*Homework 19: Clicky Game!                    *
*UCB Extension - Full-Stack Bootcamp          *
*October 2018                                 *
*********************************************** 
*/

import React from "react";
import "./Navbar.css";
const Navbar = props => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            <img src="./porsche.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
            {props.gameTitle}
        </a>

        <ul className="navbar-nav">
            <li className="nav-item">
                <span className="nav-link result"> {props.result || "Result"} </span>
            </li>
            <li className="nav-item">
                <span className="nav-link score"> {props.score || "Score"} </span>
            </li>
            <li className="nav-item">
                <span className="nav-link highestScore"> {props.topScore || "Highest Score"} </span>
            </li>
        </ul>

    </nav>
)

export default Navbar;