# Redux II

Topics:

* `axios` package
* AJAX
* Promises
* Middleware
* `redux-thunk` package
* `redux-logger` package

## Project Description

* Last week we built an app that interfaced with a `RESTful` api. That same project is now to be built using React & Redux.
* Take a look at the endpoints that our API has to offer.

  * `/api/friends/get`
  * `/api/friends/create`
  * `/api/friends/update`
  * `/api/friends/delete`

## Initialize Project

* Run `npm i` inside the root directory of this project. Run `node server.js` to start the server.
* Run `create-react-app friends` in in a separate terminal window in the root directory of the project to create your starter application.
* `cd` into 'friends' & Run `npm i --save redux react-redux redux-thunk redux-logger axios`, which will install the needed dependencies.
* You will create a list of your friends using React and Redux.
* The general flow of steps will be to create your action creator functions, your reducers, then your React components.
* Don't forget to hook up the store using the `Provider` tag inside of `src/index.js`, passing it your root reducer.
* You will need to use `redux-thunk` as a middleware inside of `src/index.js`. You'll want to be sure to pass it to `applyMiddleware()` then feed it into your createStore function.
* If you so choose include `redux-logger` to your middleware. You're going to have plenty of action creators that will consume our API so you'll get plenty of actions triggered.
* You'll only need one reducer to represent the state of this application. This reducer will be a 'friends' reducer whos job is to look at all of the responses

## Reducer and our State Tree

* Your application should have an input field, a submit button, and a list of items that represents your friends list. Make each friend a separate component.
* You're initial state could looks something like this:

```
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

* This is a pretty large state tree. But each field is extremely simple.

* Each `friend` item that is in the `friends` array should have the following format:

```
{
  name: 'Luis',
  age: 24,
  email: 'luis@lambdaschool.com',
}
```

## React

* When you type a new friend's name into the input field and press the submit button you should call an action creator that adds a new friend item to the `friends` array on the application state tree.
* When the user presses submit you will invoke the appropriate action creator which will then have its new action fed through all of the reducers.
* You will display the friends list by creating a container that receives the application's `friends` array as a prop. That container then uses `map` to display the array.

## Project

* For this project you'll need to create a few React components that will interact with your redux state.

  ## Stretch Problem

* In the requirements for this project, we implemented a GET operation and a POST operation. Add two more actions, one for making a PUT request, and the other for making a DELETE request.
* Style the friends list and the input field and make everything look nice.
* Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.
