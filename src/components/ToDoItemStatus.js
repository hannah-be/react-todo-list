import React from 'react'

const emojiForCount = (count) => {
  switch (count) {
    case 0:
      return '👏'
    case 1:
      return '☝️'
    case 2:
      return '✌️'
    case 3:
      return '🤟'
    case 4:
      return '👌'
    default: 
      return '💀'
  }
}

const ToDoItemStatus = ({
  incompletedCount
}) => (
  <div>
    <h2>{ emojiForCount(incompletedCount) }</h2> 
    <p>{ incompletedCount } remaining</p>
    </div>
)

export default ToDoItemStatus