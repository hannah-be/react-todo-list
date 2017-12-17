import React from 'react'

const ToDoItem = ({
 description,
 completed = false,
 onClick
}) => (
  <label>
    <input type='checkbox' checked={ completed }/>
    {description}
    </label>
)

export default ToDoItem