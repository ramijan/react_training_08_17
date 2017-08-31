import React from 'react';
import PropTypes from 'prop-types';
import { randomNumberGenerator } from '../store/util';

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
  }
  constructor(props) {
    super();
    // Generate target
    // this.target = Math.floor(10 + (40 * Math.random()));
    // Generate random numbers
    this.randomNumbers = Array.from({length: props.numberCount}).map(() => randomNumberGenerator());
  }
  render() {
    return (
      <div>
        <div id="target">...</div>
        <div id="random-numbers">
          TESTING: {this.props.numberCount}
          {this.randomNumbers}
        </div>
      </div>
    );
  }
}

export default Game;
