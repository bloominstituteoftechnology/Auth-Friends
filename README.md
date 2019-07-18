# Redux Friends

Topics:

* React Router
* `axios` package
* AJAX
* Promises
* Middleware
* `redux-thunk` package
* Authentication tokens
* optional: `redux-logger` package

## Project Description

* Last week we built an app that interfaced with a `RESTful` API. That same project is now to be built using React & Redux.
* Take your examples from the mini project and use them to build a more sophisticated Application. Have fun!
* Once your server is up and running, the URL you'll be able to hit from within your action creators is `http://localhost:5000`. You will however need an authentication header on all the calls except the login call.
* Take a look at the endpoints that our API has to offer in `server.js`.

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
  * **[GET]** to `/api/friends`: returns the list of friends.
  * **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).
  * **[POST]** to `/api/friends`: creates a friend and return the new list of friends. Pass the friend as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `/api/friends/:id`: updates the friend using the `id` passed as part of the URL. Send the an object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `/api/friends/123`: removes the friend using the `id` passed as part of the URL (123 in example).

## Initialize Project

* Run `yarn` or `npm i` inside the root directory of this project to install dependencies.
* Run `yarn start` or `npm start` to start the API server.
* Run `create-react-app friends` in a separate terminal window in the root directory of the project to create your starter application.
* `cd` into the _friends_ folder and type `yarn add redux react-redux redux-thunk redux-logger axios react-router-dom` which will install the needed dependencies.
* To start out, create a reducer that will be passed as the rootReducer to `createStore`. Start with a pretty simple initialState object that has a `friends` property set as an empty array. Your state tree will grow pretty large as you build out more and more actions.
* Don't forget to hook up the store using the `Provider` tag inside of `src/index.js`, passing it your newly created store.
* You will need to use `redux-thunk` as a middleware inside of `src/index.js`. You'll want to be sure to pass it to `applyMiddleware()` then feed it into your createStore function.
* If you so choose, include `redux-logger` to your middleware. You're going to have plenty of action creators that will consume our API so you'll get plenty of actions triggered.

## Build the App!
* Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like).
* The login action creator should dispatch a "logging in" action, return the promise created by `axios.post`, then save the returned token to localStorage. You can connect your Login component, and show a spinner on your form or in your button while the login request is happening.
* When the request returns, use the history object in your Login component to navigate your user to your FriendsList route
* Create a `<PrivateRoute />` component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.
* Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.
* In your FriendsList component, rendered with `<ProtectedRoute />`, you will create a list of your friends that you get from the API using React and Redux.

## Root Reducer and our State Tree

* Your initial state **could** (but doesn't have to) look something like this:

```js
{
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}
```

* This is a pretty large state tree, but each field is extremely simple.
* All of your items in your state tree represent a make up of actions that you're going to make asynchronously. Think about your application and the state you need. This root reducer object will represent that state.
* Each `friend` item that is in the `friends` array should have the following format:

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}
```

## Project

* If you'd like, you can create multiple "view" components for your routes and `connect` them all up to your `redux` state tree. You could have a component who's sole purpose is to render the login form; one for a form for updating a user; another component who's sole purpose is for creating users; and then another component who's sole purpose is to delete a user.
* It really is up to you how you build this project. I suggest writing down the flow you want to follow, and then writing down each individual piece you need for each step in the flow (ie step 3, build containers - import connect, write mapStateToProps function, import action creators and pass them to connect, etc. etc.) so that this process doesn't feel as overwhelming.

## Stretch Problem

* In the requirements for this project, we implemented a login POST operation, a GET operation, and a "add friend" POST operation. Add two more actions, one for making a PUT request, and the other for making a DELETE request.
* Style the friends list and the input field and make everything look nice.
* Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.
