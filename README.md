# HTTP/AJAX

Topics:

 * `axios` package
 * AJAX
 * Promises
 * Middleware
 * `redux-promise` package

## Project Description

### Initialize Project
  * Run `npm i` inside the root directory of this project.  Run `node server.js` to start the server.
  * Run `create-react-app friends` in in a separate terminal window in the root directory of the project to create your starter application.
  * Run `npm i --save redux react-redux redux-promise axios`, which will install the needed dependencies.
  * You will create a list of your friends using React and Redux.
  * The general flow of steps will be to create your action creator functions, your reducers, then your React components.
  * Don't forget to hook up the store using the `Provider` tag inside of `src/index.js`, passing it your root reducer.
  * You will need to use `Redux Promise` as a middleware inside of `src/index.js`.
  * Create two actions.  One action will retrieve the friends list from the server.  The second action will add a new friend to the friends list on the server.


### State Tree
  * Your application should have an input field, a submit button, and a list of items that represents your friends list.  Make each friend a separate component.
  * Your application's state tree should have a single property called `friends`.  It should take the same form as the object shown below.
   ```
  {
    friends: [],
  }
  ```
  * Each `friend` item that is in the `friends` array should have the following format:
  ```
  {
    name: 'Stephanie',
    age: 24,
    email: 'stephanie@gmail.com',
  }
  ```


### React
  * When you type a new friend's name into the input field and press the submit button you should call an action creator that adds a new friend item to the `friends` array on the application state tree.
  * When the user presses submit you will invoke the appropriate action creator which will then have its new action fed through all of the reducers.
  * You will display the friends list by creating a container that receives the application's `friends` array as a prop.  That container then uses `map` to display the array.


### Notes/Hints
 * You will only need one reducer.  This reducer will control the `friends` array property on the state tree.
 * You will have several action creators.  One for adding a new friend and another for retrieving the friends list from the server.
 * Containers require `connect` and a `mapStateToProps(state)` function to read from the state tree.
 * Actions require you to create a `mapDispatchToProps(dispatch)` function that you'll also pass to the `connect` function.


## Stretch Problem
 * In the requirements for this project, we implemented a GET operation and a POST operation. Add two more actions, one for making a PUT request, and the other for making a DELETE request. 
 * Style the friends list and the input field and make everything look nice.
 * Expand the number of properties that you put on each friend object.  Feel free to remove the dummy data on the server or modify it in any way.
