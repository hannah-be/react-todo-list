import React from 'react'

const ToDoItem = ({
 description,
 completed = false,
 onToggleCompleted
}) => (
  <label>
    <input 
    type='checkbox' 
    checked={ completed }
    onChange={ 
      (event) => { // Event listener - function that's called by the browser whenever user interaction happens
        console.log('Clicked checkbox ', description)
        // When user clicks the checkbox, carry out this function:
        onToggleCompleted()
      }
     } // inform when input changes it's status (state)
    />
    { description }
    </label>
)

export default ToDoItem