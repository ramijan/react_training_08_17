import React from 'react';
import PropTypes from 'prop-types';
import { randomNumberGenerator } from '../store/util';
import RandomNumbersPanel from './RandomNumbersPanel';
import { connect } from 'react-redux';

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.numbers).isRequired
  };
  constructor(props) {
    super();
    // Generate target
    // this.target = Math.floor(10 + (40 * Math.random()));
    // Generate random numbers
    this.randomNumbers = Array.from({ length: props.numberCount }).map(() =>
      randomNumberGenerator()
    );
    this.target = this.randomNumbers
      .slice(0, this.randomNumbers.length - 2)
      .reduce((acc, curr) => acc + curr);
  }
  gameStatus = () => {
    const sumSelected = this.props.selectedNumbers.reduce(
      (acc, curr) => acc + this.randomNumbers[curr],
      0
    );
    if (sumSelected > this.target) {
      return 'lost';
    }
    if (sumSelected === this.target) {
      return 'won';
    } else {
      return 'playing';
    }
  };
  render() {
    const gameStatus = this.gameStatus();
    return (
      <div id="game">
        <div id="target">{this.target}</div>
        <RandomNumbersPanel randomNumbers={this.randomNumbers} />
        {gameStatus}
      </div>
    );
  }
}

export default connect((state) => ({
  selectedNumbers: state.selectedNumbers
}))(Game);
