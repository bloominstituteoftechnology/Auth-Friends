import React, { useState } from "react";
import "./App.css";
import { Route, Link, withRouter, Redirect } from "react-router-dom";
import axios from "axios";

// COMPONENTS
import Login from "./components/Login";
import withAuth from "./axios";
import ListFriends from "./components/ListFriends";

const initialLoginCredentials = {
  username: "",
  password: ""
};

function App(props) {
  // SLICES OF STATE

  const [loginCredentials, setLoginCredentials] = useState(
    initialLoginCredentials
  );
  const [listFriends, setListFriends] = useState([]);

  // LOGIN FORM RELATED FUNCTIONS: ONCHANGE AND SUBMIT

  const onTypeLoginCredentials = event => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value
    });
  };

  const onSubmitLoginForm = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", loginCredentials)
      .then(res => {
        localStorage.setItem("authorization", res.data.payload);
        props.history.push("/friends");
      })
      .catch(error => {
        alert(error.response.data.error);
      });
    setLoginCredentials({
      username: "",
      password: ""
    });
  };

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <div>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Login
                {...props}
                loginCredentials={loginCredentials}
                onTypeLoginCredentials={onTypeLoginCredentials}
                onSubmitLoginForm={onSubmitLoginForm}
              />
            );
          }}
        />
        <PrivateRoute
          exact
          path="/friends"
          component={ListFriends}
          setListFriends={setListFriends}
          listFriends={listFriends}
        />
        {/* <Route
          path="/friends"
          render={props => withAuthcheck(ListFriends, props, setListFriends, listFriends)}
        /> */}
      </div>
    </div>
  );
}

// function withAuthcheck(Component, props, setListFriends, listFriends) {
//   if (localStorage.getItem("authorization")) {
//     return (
//       <Component
//         {...props}
//         setListFriends={setListFriends}
//         listFriends={listFriends}
//       />
//     );
//   }
//   return <Redirect to="/" />;
// }

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("authorization") ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default withRouter(App);
