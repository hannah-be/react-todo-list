import React from 'react'

const ToDoItem = ({
 description,
 completed = false,
 onToggleCompleted,
 onChangeDescription
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
  <input
  type='text'
  value={ description }
  onChange={ (event) => { // This function is called on every keypress
    const inputElement = event.target // Get the input
    console.log(inputElement)
    console.log(inputElement.value)
    const newDescription = inputElement.value //Get the current value from the field
    onChangeDescription(newDescription)
  } }
  >
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
    </input>
    </div>
)

export default ToDoItem