# Auth Friends

  Topics:

  * React Router
  * Protected Routes
  * `axios` package
  * AJAX
  * Promises
  * Authentication tokens

----------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------

## Instructions

  ### Task 1: Set Up / #### Initialize Project

  * Initial commit
  * (NPM) Run `npm install` inside the root directory of this project to install dependencies for the API server.
    * Run `npm start` to start the API server.
  * (CRA) Run `npx create-react-app friends --use-npm` in a separate terminal window in the root directory of the project to create your starter application.
    * If you experience issues with `npx`, you may create your starter application by running `create-react-app friends --use-npm`.
  * (RRD) `cd` into the _friends_ folder and type `npm install axios react-router-dom` which will install the needed dependencies.

  --------------------------------------------------------------------------------------------------------------------------------------------------------

  ### ***Tasks 2-4: MVP***


  #### Task 2: Project Description

    * There is an API built that has authentication built into it. The API holds a list of friends and lets you add, edit, or remove friends from that list. 
    * All of the API endpoints (except the login endpoint) are considered "protected", meaning you have to make the request with an authentication token in the header or the API will send back a `401` error. 
    * Take your examples from the guided project and use them to build a more sophisticated application. Have fun!
    * Once your server is up and running, the URL you'll be able to hit from within your app is `http://localhost:5000`. You will however need an authentication header on all the calls except the login call.
    * Take a look at the endpoints that our API has to offer in `server.js`.

      * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambda4' }`
      * **[GET]** to `/api/friends`: returns the list of friends.
      * **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).
      * **[POST]** to `/api/friends`: creates a friend and return the new list of friends. Pass the friend as the `body` of the request (the second argument passed to `axios.post`).
      * **[PUT]** to `/api/friends/:id`: updates the friend using the `id` passed as part of the URL. Send the an object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
      * **[DELETE]** to `/api/friends/123`: removes the friend using the `id` passed as part of the URL (123 in example).
      
      Ref: https://codesandbox.io/s/auth-starter-forked-5pki6

      Walk-through:

      1. Form captures user credentials
          1. Login > handler > axios request > post request that sends credentials
          2. if correct server sends a token as payload
              1. set as local storage
              2. routed to our landing page /protected
          3. err > err
      2. Private Route
          1. (We are at private route now) rendered on dom
              1. **PrivateRoute.js - will see if token passes
                  1. renders component with props if passes
                  2. loads login screen 
      3. Gas Prices component:
          1. when componentDidMount is called
              1. getData
                  1. makes axios request (axiosWithAuth)
                      1. gets sent with authorization header
                  2. When data comes back we filter to get the correct data
                      1. set that to state
                      2. Format the data to receive that.


  #### Task 3: Build the App!
    * 3A [x] Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like).

    * 3B [x] The login function should save the returned token to localStorage. 
    You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.

    * 3C [x] When the request returns, save the token to `localStorage`, then use the history object in your Login component to navigate your user to your FriendsList route


    * 3D [x] Create a `<PrivateRoute />` component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.
    
    * 3E [x] Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.

    * 3F [x] In your FriendsList component, rendered with `<ProtectedRoute />`, you will create a list of your friends that you get from the API.


  ## Task 4: Adding New Friends**
    * 4A [x]Create a form to collects data for a new friend.

    * 4B [x]Make a POST request to add a friend to the database
    
    * 4C [ ] Each `friend` item that is in the `friends` array should have the following format:

  ```js
  {
    id: 1
    name: 'Joe',
    age: 24,
    email: 'joe@lambdaschool.com',
  }
  ```

  * If you'd like, you can create multiple "view" components for your routes. You could have a component who's sole purpose is to render the login form; one for a form for updating a user; another component who's sole purpose is for creating users; and then another component who's sole purpose is to delete a user.
  * It really is up to you how you build this project. I suggest writing down the flow you want to follow, and then writing down each individual piece you need for each step in the flow so that this process doesn't feel as overwhelming.

----------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------

### Task 5: Exit Ticket
  Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/HTCR4wnK3eu6Q94z9/cHkY6rNFiHbPFm).
  The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 6: Stretch Problems
  * In the requirements for this project, we implemented a login POST operation, a GET operation, and a "add friend" POST operation. Add two more functions, one for making a PUT request, and the other for making a DELETE request.
  * Style the friends list and the input field and make everything look nice.
  * Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.

## Task 7: Review/Clean/Submit
  * [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
  * [ ] Fill out your module retrospective form [here](https://forms.lambdaschool.com/module-retrospective) with a link to your PR


