import React, { useState, useEffect } from 'react';
// import { Link, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
// import './App.css';
import api from '../utils/api';

function FriendsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api()
      .get('http://localhost:5000/api/friends', data)
      .then(res => {
        // newFriend(res.data)
        console.log(res)
      })
      .catch(error => console.log('error, no data returned'));
  }, []);

  return (
    <div className="App">
     <h1>Friends List Soon</h1>
    </div>
  );
}

export default FriendsList;
