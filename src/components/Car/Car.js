/* 
***********************************************
*Author: Baruch Flores                        *
*Homework 19: Clicky Game!                    *
*UCB Extension - Full-Stack Bootcamp          *
*October 2018                                 *
*********************************************** 
*/

import React from "react";
import "./Car.css";

const Car = props => {
  console.log(props);

  let cars = props.cars.map(car => (
    <div className="col-3" key={car.id} onClick={() => { props.handleClick(car.id) }}>
      <div className="card">
        <img className="card-img-top" src={car.image} alt="" />
      </div>
    </div>
  ));

  return cars;
};

export default Car;