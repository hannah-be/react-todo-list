import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem'

class App extends Component {
  render() {
    return (
      <div className="App">
      <ToDoItem description="First" completed={true}></ToDoItem>
      <ToDoItem description="Second"></ToDoItem>
      <ToDoItem description="Third"></ToDoItem>
      </div>
    );
  }
}

export default App;
