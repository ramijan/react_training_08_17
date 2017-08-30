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
  // this is a more efficient way to bind this
  // so it's not happening on every re-render
  constructor() {
    super()
    this.f1 = this.f1.bind(this);
  }
  state = {
    counter: 1
  };

  f1() {
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
