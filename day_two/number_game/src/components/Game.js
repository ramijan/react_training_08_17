import React from "react";
import PropTypes from "prop-types";
import { randomNumberGenerator } from "../store/util";
import RandomNumbersPanel from './RandomNumbersPanel'

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired
  };
  constructor(props) {
    super();
    // Generate target
    // this.target = Math.floor(10 + (40 * Math.random()));
    // Generate random numbers
    this.randomNumbers = Array.from({ length: props.numberCount }).map(() =>
      randomNumberGenerator()
    );
    console.log(this.randomNumbers.slice(0, this.randomNumbers.length - 2));
    this.target = this.randomNumbers
      .slice(0, this.randomNumbers.length - 2)
      .reduce((acc, curr) => acc + curr, 0);
  }
  render() {
    return (
      <div>
        <div id="target">{this.target}</div>
        <RandomNumbersPanel randomNumbers={this.randomNumbers} />
      </div>
    );
  }
}

export default Game;
