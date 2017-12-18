import React from 'react'

const ToDoItem = ({
 description,
 completed = false,
 onToggleCompleted
}) => (
  <div>
  <button
    type='button'
    value={ completed }
    onClick={
      (event) => { // Event listener - function that's called by the browser whenever user interaction happens
      // When user clicks the checkbox (i.e. the event happens) carry out this function:
        onToggleCompleted()
      }
    }
  >{ completed ? '☑️' : '🔘' }</button>
  {/* <label> */}
{/* 
    <input 
    type='checkbox' 
    checked={ completed }
    onChange={ 
      (event) => { 
        console.log('Clicked checkbox ', description)
        // When user clicks the checkbox, carry out this function:
        onToggleCompleted()
      }
     } // inform when input changes it's status (state)
    /> */}
    { description }
    {/* </label> */}
    </div>
)

export default ToDoItem