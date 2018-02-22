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
* Take your examples from the mini project and use them to build a more sophisticated Application. Have fuN!
* Once your server is up and running the URL you'll be able to hit from within your action creators is `http://localhost:5000`.
* Take a look at the endpoints that our API has to offer in `server.js`.

  * `**[GET]** /api/friends/get`
  * `**[POST]** /api/friends/create`
  * `**[UPDATE]** /api/friends/update`
  * `**[DELETE]** /api/friends/delete`

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
* All of your items in your state tree represent a make up of actions that you're going to make asynchronously. Think about your application and the state you need. This reducer object will represent that state.
* Each `friend` item that is in the `friends` array should have the following format:

```
{
  name: 'Luis',
  age: 24,
  email: 'luis@lambdaschool.com',
}
```

## Project

* For this project you'll need to create a few React components that will interact with your redux state.
* This app can all be built in terms of a single view made up of multiple components that is bound to all of your `action creators`. (No need for a router here. We can fit all we need to fit onto one page with some proper styling and layout decisions)
* Your component tree could look a lot like this.

```
index.js
  - App.js
    - Friends.js
    - CreateFriendForm.js
    - UpdateFriendForm.js
```

* If you'd like, you can create multiple components and `connect` them all up to your `redux` state tree. You could have a component who's sole purpose is to render a form for updating a user, another component who's sole purpose is for creating users, and then another component who's sole purpose is to delete a user.
* It really is up to you how you build this project. You'll be given a couple of days to work on it so don't feel too overwhelmed at first. Just start with `App.js` and be sure that it calls your `node server`.

#### App.js

* Inside of `App.js` I suggest doing the friend fetching for your friend data from within `componentDidMount`. You'll need to call an action creator that you build in order to fetch your friends.
* A crude example of what this coule potentially look like would be:
  ![Bad example](https://image.ibb.co/hpg7gw/Screen_Shot_2018_01_24_at_1_07_21_PM.png)
* You **Definitely** want to style your application to look much better than mine!

## Stretch Problem

* In the requirements for this project, we implemented a GET operation and a POST operation. Add two more actions, one for making a PUT request, and the other for making a DELETE request.
* Style the friends list and the input field and make everything look nice.
* Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.
