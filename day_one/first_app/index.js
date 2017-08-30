import React from 'react';
import ReactDOM from 'react-dom';

// called a "function component"
// function Button(props) {
//   return (
//     <button>{props.label}</button>
//   );
// }

// called a "class component"
// only class components have state
class Button2 extends React.Component {
  state = {
    counter: 1
  };

  // simpler way to bind this, but it's stage-3
  f1 = () => {
    // setState is like "merge with current state"
    this.setState({
      counter: 2
    });
  }

  render() {
    return (
      <button onClick={this.f1}>
        {this.props.label}
        -- {this.state.counter}
      </button>
    );
  }
}

// called a "component element"
const tree = (
  <div>
    <Button2 label="Save2" />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
