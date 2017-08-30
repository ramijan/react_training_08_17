import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <input ref={(inputElement) => {this.inputElement = inputElement;}} />
        <a href="#" onClick={()=>{this.inputElement.focus();}}>Focus Input</a>
        <Button label="Save2" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
