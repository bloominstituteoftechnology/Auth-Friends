import React, { useState } from "react";
import "./App.css";
import { Route, Link, withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import uuid from "uuid";

// COMPONENTS
import Login from "./components/Login";
import withAuth from "./axios";
import ListFriends from "./components/ListFriends";

const initialLoginCredentials = {
  username: "",
  password: ""
};

const initialFriend = {
  name: "",
  age: "",
  email: ""
};

function App(props) {
  // SLICES OF STATE

  const [loginCredentials, setLoginCredentials] = useState(
    initialLoginCredentials
  );
  const [listFriends, setListFriends] = useState([]);

  const [newFriend, setNewFriend] = useState(initialFriend);

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

  // NEW FRIEND FORM ON CHANGE AND POST TO SERVER

  const onTypeNewFriendForm = event => {
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value
    });
  };

  const onSubmitNewFriend = event => {
    event.preventDefault();
    withAuth()
      .post("http://localhost:5000/api/friends", {
        ...newFriend,
        id: uuid()
      })
      .then(res => {
        setListFriends(res.data);
        setNewFriend(initialFriend);
      })
      .catch(error => {
        alert(error.message);
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
          onTypeNewFriendForm={onTypeNewFriendForm}
          newFriend={newFriend}
          onSubmitNewFriend={onSubmitNewFriend}
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

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      path={path}
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
