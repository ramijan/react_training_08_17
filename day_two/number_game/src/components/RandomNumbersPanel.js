import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NumberTile from './NumberTile';

const RandomNumbersPanel = (props) => {
  const isNumberTileSelected = (numberIndex) => {
    return props.selectedNumbers.indexOf(numberIndex) >= 0;
  };

  return (
    <div id="random-numbers">
      {props.randomNumbers.map((number, index) => (
        <NumberTile
          key={index}
          number={number}
          selected={isNumberTileSelected(index)}
          id={index}
          canPlay={props.canPlay}
          onClick={props.selectNumber}
        />
      ))}
    </div>
  );
};

RandomNumbersPanel.propTypes = {
  randomNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectNumber: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  canPlay: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  // return state; this is dangerous
  return { selectedNumbers: state.selectedNumbers };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectNumber: (numberIndex) => {
      // if (ownProps.canPlay) {
      dispatch({ type: 'SELECT_NUMBER', payload: { index: numberIndex } });
      // }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomNumbersPanel);
