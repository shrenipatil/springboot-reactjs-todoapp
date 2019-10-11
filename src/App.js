import React, { Component } from 'react';
import './App.css';
import ToDoApp from './component/ToDoApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ToDoApp />
      </div>
    );
  }
}

export default App;

