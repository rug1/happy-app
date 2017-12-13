import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: null
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(numberSelected) {
    this.setState({ selected: numberSelected });
  }

  render() {
    return (
      <div>
        <h2 className="heading">how are you today?</h2>
        <div className="emoji-containter">
          <p>
            <span style={{ opacity: this.state.selected === 5 ? 1 : 0.2 }} onClick={() => this.onClick(5)}>😀 </span>
            <span style={{ opacity: this.state.selected === 4 ? 1 : 0.2 }} onClick={() => this.onClick(4)}>🙂 </span>
            <span style={{ opacity: this.state.selected === 3 ? 1 : 0.2 }} onClick={() => this.onClick(3)}>😐 </span>
            <span style={{ opacity: this.state.selected === 2 ? 1 : 0.2 }} onClick={() => this.onClick(2)}>🙁 </span>
            <span style={{ opacity: this.state.selected === 1 ? 1 : 0.2 }} onClick={() => this.onClick(1)}>☹️ </span>
            <span style={{ opacity: this.state.selected === 0 ? 1 : 0.2 }} onClick={() => this.onClick(0)}>😔 </span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
