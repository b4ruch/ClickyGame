import React, { Component } from 'react';
import './App.css';
import porscheCollection from "./cars.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";


function shuffleCars(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      result: "Reset!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCars = shuffleCars(porscheCollection);
    this.setState({ porscheCollection: shuffledCars });
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
          handleShuffle={this.handleShuffle} />
      </Wrapper>
    )
  }
}

export default App;
