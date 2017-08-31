import React from 'react';
import PropTypes from 'prop-types';
import NumberTile from './NumberTile';

const RandomNumbersPanel = (props) => {
  return (
    <div id="random-numbers">
      {props.randomNumbers.map((number, index) => (
        <NumberTile key={index} number={number} />
      ))}
    </div>
  );
};

RandomNumbersPanel.propTypes = {
  randomNumbers: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default RandomNumbersPanel;
