import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem'

// Data (model)
const items = [
  { description: 'First', completed: true },
  { description: 'Second', completed: false },
  { description: 'Third', completed: false },
  { description: 'Fourth', completed: true }
]


// UI (view)
class App extends Component {
  render() {
    return (
      <div className="App">
      {
        items.map((item, index) => (
          <ToDoItem 
            key={ index }
            description={ item.description }
            completed={ item.completed }
          />
        ))
      }
      </div>
    );
  }
}

export default App;
