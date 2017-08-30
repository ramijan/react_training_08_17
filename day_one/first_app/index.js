import React from 'react';
import ReactDOM from 'react-dom';

// react 'component'
function Button(props) {
  return (
    <button>{props.label}</button>
  );
}

// second syntax for react component
class Button2 extends React.Component {
  render() {
    return (
      <button>{this.props.label}</button>
    );
  }
}

const tree = (
  <div>
    <Button label="Save" />
    <Button2 label="Save2" />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
