import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CreateForm from "./CreateForm";

class List extends React.Component {
  state = {
    FriendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(response => {
        this.setState({ ...this.state, FriendsList: response.data });
      })
      .catch("ERROR", error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h2>My Friends</h2>
        <Router>
          <Link to="/create">Add a Friend</Link>
          <Switch>
            <Route path="/create" component={CreateForm} />
          </Switch>
        </Router>

        {this.state.FriendsList.map(friend => (
          <div>
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
