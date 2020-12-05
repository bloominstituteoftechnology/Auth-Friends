import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import AddFriendForm from "./components/AddFriendForm";
import Dashboard from "./components/Dashboard";
import Friend from "./components/Friend";

function App() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("Friends: ", friends);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    axiosWithAuth()
      .get("/api/friends", {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        console.log("success response: ", res);
        setFriends(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="App">
      <NavBar />
      {/* Look in your notes to make the dynamic routes */}
      <PrivateRoute>
        <Friend exact path="/friends/:id" friends={friends} />
      </PrivateRoute>
      <PrivateRoute exact path="/friends">
        <Friends friends={friends} loading={loading} />
      </PrivateRoute>
      <PrivateRoute path="/add_friend">
        <AddFriendForm />
      </PrivateRoute>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>{" "}
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
