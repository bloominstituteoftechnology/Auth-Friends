import React, { useState, useEffect } from 'react';
// import { Link, Route, withRouter } from 'react-router-dom';
// import axios from 'axios';
// import './App.css';
import api from '../utils/api';

function FriendsList(props) {
  const [data, setData] = useState([]);
console.log(data);

  useEffect(() => {
    api()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        setData(res.data)
        console.log(res)
      })
      .catch(error => console.log('error, no data returned'));
  }, []);

  return (
    <div className="friendsList">
     <h1>Friends List</h1>
     {data.map((item, index) => (
      <p className='person' key={index}><strong>Name:</strong> {item.name}<br/> <strong>Age:</strong> {item.age}<br/> <strong>Email:</strong> {item.email}</p> 
      // <p>{item.age}</p>
      // <p>{item.email}</p>
     ))}
     
    </div>
  );
}

export default FriendsList;
