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


### Change button label to an editable input field (steps to implementing an event handler)
1. Change the label field in the component to an input field that takes type (text) and value (description) as props, as well as an onChange event listener:
```javascript
  <input
  type='text'
  value={ description }
  onChange={ (event) => { // This function is called on every keypress
    const inputElement = event.target // Get the input
    console.log(inputElement)
    console.log(inputElement.value)
    const newDescription = inputElement.value //Get the current value from the field
    onChangeDescription(newDescription)
    // Could be re-written as 
    //onChangeDescription(event.target.value)
    // i.e. the value of the html element that was changed on the event(every keypress) will be passed to the onChangeDescription property
  } }
  >
```
2. In the app, pass the onChangeDescription method to the component:
```javascript
<ToDoItem
keys={index}
{ ...item }
onToggleCompleted={ () => this.onToggleItemAtIndex(index) }
// Pass the new description to the item at this index
onChangeDescription={ (description) => this.onChangeItemDescriptionAtIndex(index, description)}
/>
```

3. Create a method to update the state (within the app but outside the render() ):
```javascript
  onChangeItemDescriptionAtIndex = (index, description) => {
      // Get the previous state, update it, and return it
    this.setState((prevState) => {
      let items = prevState.items
      items = changeDescriptionOfItemsAtIndex(items, index, description)
      return { items }
    })
  }
  ```
4. Create a helper method (outside the app class) that will find the item at the index, mutate the object and return it:

```javascript
const changeDescriptionOfItemsAtIndex = (items, index, description) => {
  const item = items[index]
  item.description = description
  return items
}
```



