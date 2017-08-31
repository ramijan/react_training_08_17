import React from 'react';
import PropTypes from 'prop-types';

class NumberTile extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    canPlay: PropTypes.bool.isRequired
  };
  handleClick = () => {
    if (!this.props.selected && this.props.canPlay) {
      this.props.onClick(this.props.id);
    }
  };
  static contextTypes = {
    store: PropTypes.object
  };
  render() {
    return (
      <div
        className="number"
        onClick={this.handleClick}
        style={{ opacity: this.props.selected ? 0.3 : 1 }}
      >
        {this.props.number}
      </div>
    );
  }
}

export default NumberTile;
