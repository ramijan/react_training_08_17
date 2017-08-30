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
  incrementCounter = (event) => {
    event.preventDefault();
    // setState is like "merge with current state"
    // if you are going to use previous state to calculate new state, better
    // to use function argument instead of object.  Because setState is async
    this.setState((prevState) => {
      return {counter: prevState.counter+1};
    });
  }

  render() {
    return (
      <button type="submit" onClick={this.incrementCounter}>
        {this.state.counter}
      </button>
    );
  }
}

// called a "component element"
const tree = (
  <div>
    <input id="inputElement" />
    <a href="#" onClick={()=>{document.getElementById('inputElement').focus();}}>Focus Input</a>
    <Button2 label="Save2" />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
