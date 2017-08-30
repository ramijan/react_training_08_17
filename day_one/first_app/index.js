import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

class App extends React.PureComponent {
  state = {
    counter: 99
  };

  incrementCounter = () => {
    this.setState((prevState) => {
      return {counter: prevState.counter+1};
    });
  }

  render() {
    return (
      <div>
        <Button label={this.state.counter} onClick={this.incrementCounter} />
        <Button label={this.state.counter} onClick={this.incrementCounter} />
        <Button label={this.state.counter} onClick={this.incrementCounter} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
