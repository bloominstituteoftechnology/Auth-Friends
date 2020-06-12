import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
       console.log(res.data)
        })
      .catch(err =>
        console.error("ERROR", err.message)
      );
  };

  formatData = () => {
    const formattedData = [];
   
    return formattedData;
  };

  render() {
   
    return (
      <div>
        
      </div>
    );
  }
}

export default FriendsList;
