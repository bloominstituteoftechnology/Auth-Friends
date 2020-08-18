// THis is how to implement protected routes using an authentication token and Redirect
//check if we are authenticated or not
import React from "react";
import { Route, Redirect } from "react-router-dom";

/*
  Private route rules:
  1. It has the sam API as <Route />
  2. It renders a <Route /> and passes all the props through to it
  3. It checks if the user is authenticated, if they are, it renders the 'component' prop. If not, it redirects the user to /login.
*/

// or

//it uses the same API as <Route />
// it renders the Route and passes the props through
// It checks if user is auth; if SourceBuffer, render 'component'
// if not, redirect to /login

const PrivateRoute = ({ component: Component, ...rest }) => {
  //taking component out of props and rebuilding props again.
  //component is capilaze so JSX renders it
  //?Why do you use rest to spread the other components instead of props? IT gathers the rest of your objects so you can sepate some of the properties
  //?Why the name rest and not props?
  return (
    <Route
      {...rest} //the rest of the props are send to the Route. Note: rest of the props other than component. ?Why do you need to specify the rest of the other props in Route?
      render={(props) => {
        //if statement can be edit to adjust a specific code
        //allows to render components with associated props. From single page application TK
        if (localStorage.getItem("token")) {
          //if there is a token in localstorage render Component
          return <Component {...props} />;
        } else {
          //redirect to login
          return <Redirect to="/login" />; //acts like an auto link
        }
      }}
    ></Route>
  );
};

export default PrivateRoute;
