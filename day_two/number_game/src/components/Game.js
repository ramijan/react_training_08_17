import React from 'react';
import PropTypes from 'prop-types';
import { randomNumberGenerator } from '../store/util';
import RandomNumbersPanel from './RandomNumbersPanel';
import { connect } from 'react-redux';
import { decrementTime } from '../store/actions';
import shuffle from 'lodash.shuffle';

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
    decrementTime: PropTypes.func.isRequired,
    remainingSeconds: PropTypes.number.isRequired,
    resetGame: PropTypes.func.isRequired,
    updateScore: PropTypes.func.isRequired
  };
  constructor(props) {
    super();
    this.randomNumbers = Array.from({ length: props.numberCount }).map(() =>
      randomNumberGenerator()
    );
    this.target = this.randomNumbers
      .slice(0, this.randomNumbers.length - 2)
      .reduce((acc, curr) => acc + curr);
    this.randomNumbers = shuffle(this.randomNumbers);
  }

  // life cycle methods
  // constructor
  // componentWillMount  ##Samer doesn't use it because it's basically same as constructor
  // render
  // componentDidMount  ## executes right after component is rendered and mounted
  // componentWillUnmount  ## executed before react unmounts component from dom

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.props.decrementTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  gameStatus = () => {
    const sumSelected = this.props.selectedNumbers.reduce(
      (acc, curr) => acc + this.randomNumbers[curr],
      0
    );
    if (sumSelected < this.target && this.props.remainingSeconds > 0) {
      return 'playing';
    }
    clearInterval(this.intervalId);
    if (sumSelected > this.target || this.props.remainingSeconds <= 0) {
      return 'lost';
    }
    if (sumSelected === this.target) {
      this.props.updateScore(this.props.remainingSeconds);
      return 'won';
    }
  };
  targetPanelColor(gameStatus) {
    switch (gameStatus) {
      case 'won':
        return 'green';
      case 'lost':
        return 'red';
      default:
        return '';
    }
  }
  render() {
    const gameStatus = this.gameStatus();
    return (
      <div id="game">
        <div id="time">Time: {this.props.remainingSeconds}</div>
        <div
          id="target"
          style={{
            backgroundColor: this.targetPanelColor(gameStatus)
          }}
        >
          {this.target}
        </div>
        <RandomNumbersPanel
          canPlay={gameStatus === 'playing'}
          randomNumbers={this.randomNumbers}
        />
        {gameStatus}
        {gameStatus !== 'playing' && (
          <button onClick={this.props.resetGame}>Play again</button>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    selectedNumbers: state.selectedNumbers,
    remainingSeconds: state.remainingSeconds
  }),
  { decrementTime }
)(Game);
