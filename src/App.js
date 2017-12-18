import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem'



// UI (view / controller)
class App extends Component {
  // Data (model)
  state = {
    items: [
      { description: 'First', completed: true },
      { description: 'Second', completed: false },
      { description: 'Third', completed: false },
      { description: 'Fourth', completed: true }
    ]

  }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      // Get current items
      const beforeItems = prevState.items
      const afterItems = beforeItems.map((item, itemIndex) => {
        // WWhen the index of the item that is being passed, matches the item we're mapping through
        if (itemIndex === index) {
          // // Create a new copy of that item
          // const copy = Object.assign(
          //   {}, // New blank object
          //   item, // Copy all properties (key value pairs) from existing item
          //   { completed: !item.completed } // Override the completed value to be the opposite
          // )
          // Modern syntax version:
          return { 
            ...item, 
            completed: !item.completed 
          }
        // No changes to make to this particular item
        } else {
          return item
        }
      })

      // Regurn the changes we have
      return {
        items: afterItems
      }
    })
  }


  render() {
    const items = this.state.items

    const total = items.length 

    let totalCompleted = 0
    let totalIncomplete = 0
    items.forEach((item) => {
      if (item.completed) {
        totalCompleted += 1
      } else {
        totalIncomplete += 1
      }
    })

    return (
      <div className="App">
      <dl>
        <dt>Total completed</dt>
        <dd>{totalCompleted}</dd>
        <dt>Total incomplete</dt>
        <dd>{totalIncomplete}</dd>
        <dt>Total</dt>
        <dd>{total}</dd>
        </dl>

        <h2>Completed items</h2>
        {
          items.map((item, index) => {
            if (!item.completed) {
              return null
            } else {
              return (
                <ToDoItem
                keys={index}
                { ...item }
                onToggleCompleted={ () => this.onToggleItemAtIndex(index) }
                />
              )
            }
          })
        }
        <h2>Incomplete items</h2>
        {
          items.map((item,index) => {
            if (item.completed) {
              return null
            } else {
              return (
            <ToDoItem 
              keys={ index }
              { ...item }
              onToggleCompleted={ () => this.onToggleItemAtIndex(index) }
            />)
            }}
          )
        }
      {
        // items.map((item, index) => (
        //   <ToDoItem 
        //     key={ index }
        //     description={ item.description }
        //     completed={ item.completed }
        //     onToggleCompleted={
        //       () => {
        //         console.log('Todoitem onToggleCompleted received', index)
        //         this.onToggleItemAtIndex(index)
        //       }
        //     }
        //   />
        // ))
      }
      </div>
    );
  }
}

export default App;
