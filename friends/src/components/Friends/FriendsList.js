import React, { Component } from "react";
import { Link } from 'react-router-dom';


import FriendCard from "./FriendCard";

import axios from 'axios';


class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios     
    .get(`http://localhost:5000/api/friends`)
       .then(response => {
          this.setState({ friends: response.data });
       })
       .catch(err => {
         console.log(err);
       });
  }


  render() {
  return (
      <div>
        {this.state.friends.map(friend => {
          return (
            <Link to={`/friend/${friend.id}`} key={friend.id} >
              <FriendCard friend={friend} />
            </Link>
          );
        })}
      </div>
    );
  }
};

export default FriendsList;