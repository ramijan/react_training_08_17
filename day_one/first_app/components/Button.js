import React from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
// equivalent to module.exports = Button;
