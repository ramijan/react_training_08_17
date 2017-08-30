import React from 'react';
import ReactDOM from 'react-dom';

// called a "function component"
function Button(props) {
  return (
    <button>{props.label}</button>
  );
}

// called a "class component"
class Button2 extends React.Component {
  render() {
    return (
      <button>{this.props.label}</button>
    );
  }
}

// called a "component element"
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
