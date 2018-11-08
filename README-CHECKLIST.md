// PR = 
## Initialize Project

* [] Run `yarn` or `npm i` inside the root directory of this project to install dependencies.
* [] Run `yarn start` or `npm start` to start the API server.
* [] Run `create-react-app friends` in a separate terminal window in the root directory of the project to create your starter application.
* [] `cd` into the _friends_ folder and type `yarn add redux react-redux redux-thunk redux-logger axios` or `npm i redux react-redux redux-thunk redux-logger axios`, which will install the needed dependencies.
* [] You will create a list of your friends using React and Redux.
* [] A possible flow of steps will be to create your Components, action creators, reducers, root reducer and your Redux store. Then use the Provider component from `react-redux` to pass the store to your root component and `connect` the React components that need access to the store.
* [] Don't forget to hook up the store using the `Provider` tag inside of `src/index.js`, passing it your root reducer.
* [] You will need to use `redux-thunk` as a middleware inside of `src/index.js`. You'll want to be sure to pass it to `applyMiddleware()` then feed it into your createStore function.
* [] If you so choose, include `redux-logger` to your middleware. You're going to have plenty of action creators that will consume our API so you'll get plenty of actions triggered.

## Root Reducer and our State Tree

* [] Your initial state **could** (but doesn't have to) look something like this:

```js
{
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}
```

* This is a pretty large state tree, but each field is extremely simple.
* All of your items in your state tree represent a make up of actions that you're going to make asynchronously. Think about your application and the state you need. This root reducer object will represent that state.
* [] Each `friend` item that is in the `friends` array should have the following format:

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}
```

## Project

* For this project you'll need to create a few React components that will interact with your Redux state.
* This app can all be built in terms of a single view made up of multiple components. Some components will be connected to your Redux Store and others will get their data passed down as props from the connected components.

## No need for a router here. We can fit all we need into one page with some proper styling and layout decisions.

* [] Your component tree **could** (but doesn't have to) look a like this.

```
index.js
  - App.js
    - Friends.js
    - CreateFriendForm.js
    - UpdateFriendForm.js
```

* [] create multiple components and `connect` them all up to your `redux` state tree. 
* [] component who's sole purpose is to render a form for updating a user
* [] component who's sole purpose is for creating users
* [] component who's sole purpose is to delete a user.

* It really is up to you how you build this project. I suggest 

* [] write down the flow you want to follow
* [] write down each individual piece you need for each step in the flow:
  * (ie step 3, build containers - import connect, write mapStateToProps function, import action creators and pass them to connect, etc. etc.) so that this process doesn't feel as overwhelming.

#### App.js

* [] Inside of `App.js` do the friend fetching for your _friends_ data from within `componentDidMount()`. You'll need to call an action creator that you build in order to fetch your friends. A crude example of what this could potentially look like would be:
  ![Bad example](https://image.ibb.co/hpg7gw/Screen_Shot_2018_01_24_at_1_07_21_PM.png)
* []  You **Definitely** want to style your application to look much better than mine!

## Stretch Problem

* In the requirements for this project, we implemented a GET operation and a POST operation. 

* [] Add actions for making a PUT request
* [] Add action for making a DELETE request.
* [] Style the friends list and the input field and make everything look nice.
* [] Expand the number of properties that you put on each friend object. 
* [] Feel free to remove the dummy data on the server or modify it in any way.
