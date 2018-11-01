/* 
***********************************************
*Author: Baruch Flores                        *
*Homework 19: Clicky Game!                    *
*UCB Extension - Full-Stack Bootcamp          *
*October 2018                                 *
*********************************************** 
*/


import React, { Component } from 'react';
import './App.css';
import porscheCollection from "./cars.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";


function randomizeCars(cars) {
  for (let i = cars.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let ii = cars[i];
    let jj = cars[j];
    jj = (ii=>ii)(ii,ii=jj);
    cars[i] = ii;
    cars[j] = jj;
  }
  return cars;
};

class App extends Component {
  state = {
    porscheCollection,
    score: 0,
    topScore: 0,
    result: "",
    chosen: []
  };

  handleClick = id => {
    if (this.state.chosen.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ chosen: this.state.chosen.concat(id) });
    } else {
      this.handleReset();
    }
  };


  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      result: "Good choice!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ result: "You win!" });
    }
    this.handlerandomize();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      result: "Reset!",
      chosen: []
    });
    this.handlerandomize();
  };

  handlerandomize = () => {
    let randomizedCars = randomizeCars(porscheCollection);
    this.setState({ porscheCollection: randomizedCars });
  };


  render() {
    return (
      <Wrapper>
        <Navbar
          gameTitle="Porsche Collection Game"
          score={this.state.score}
          topScore={this.state.topScore}
          result={this.state.result} />

        <Grid
          cars={porscheCollection}
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handlerandomize={this.handlerandomize} />
      </Wrapper>
    )
  }
}

export default App;
