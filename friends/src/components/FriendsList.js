import React from "react";
import moment from "moment";
import Loader from "react-loader-spinner";
import FriendsCards from "./FriendsCards";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { response } from "express";

class FriendsList extends React.Component {
  state = {
    FriendsList: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth() // we changed axios with axiosWithAuth()
      .get("/api/data")
      .then((res) => {
        console.log(res);
        this.setState({
          FriendsList: response.friends,
        }).catch((err) => {
          console.log(err);
        });
      });
  };

  render() {
    return (
      <div className="friendscards">
        <FriendsCards />
        Hello friends
      </div>
    );
  }
}

export default FriendsList;
