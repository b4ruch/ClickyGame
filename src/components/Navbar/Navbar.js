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
    <div className="wrapper2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container my-1 justify-content-center">
                <a className="navbar-brand" href="/">
                    <img src="./porsche2.png" width="125" height="125" className="d-inline-block align-top" alt=""></img>
                    <p className="title ">{props.gameTitle}</p>
                </a>
            </div>
        </nav >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 m-0">
            <div className="container mx-auto my-0 justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="nav-link result"> {props.result || "Result"} </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link score"> Score: {props.score || ""} </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link highestScore"> Highest Score: {props.topScore || ""} </span>
                    </li>
                </ul>
            </div>
        </nav >
    </div>
)

export default Navbar;