This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup
- ``yarn create react-app react-todo-list`` - this creates the app and also runs ``yarn install``
- ``yarn start `` to start the server locally.

- Remove default fill content from App.js and App.css
- Create components folder within the src directory
- Create ToDoItem component


### Challenges

1. Change Todo Item checkbox to instead use emoji icons for tick and cross inside a <button>
2. Split the todo items into two groups: completed and incompleted
    Hint: first create two functions filterCompletedItems and filterIncompletedItems, then use them in the render() method
    Hint: however, does this track our item indexes correctly?
    Hint: use .map twice instead, and skip unwanted items by substituting them with null
3. Make todo item description editable
    Hint: create a onChangeItemDescriptionAtIndex(index, description) method in your App
    Hint: the onChange prop of a <input> will be called as a function with passed event. You can get the description using event.target.value
4. Add a TodoItemsStatus component that shows the total number of items, and displays how many are incomplete
5. Add emoji to TodoItemsStatus, that displays a different emoji based on the count incomplete. e.g.
    0: 👏🎉👯🌞
    1: 🖕
    2: ✌
    3: 🤟
    greater than 3: 🤯
