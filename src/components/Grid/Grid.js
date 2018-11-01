/* 
***********************************************
*Author: Baruch Flores                        *
*Homework 19: Clicky Game!                    *
*UCB Extension - Full-Stack Bootcamp          *
*October 2018                                 *
*********************************************** 
*/

import React from "react";
import "./Grid.css";
import CarCard from "../Car";

const Grid = props => {

    console.log(props);
    return (

        <div className="container">
            <div className="row introp">
                <h1 className="intro">Try to click on each classic Porsche car. But do not choose the same car twice or you lose!</h1>
            </div>
            <div className="row w-90">
                <CarCard
                    cars={props.cars}
                    handleClick={props.handleClick}
                    handleIncrement={props.handleIncrement}
                    handleReset={props.handleReset}
                    handleShuffle={props.handleShuffle}
                />
            </div>
        </div>
    );
}

export default Grid;