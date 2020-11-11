import React, {useState} from 'react';
import axios from 'axios';
import { axiosWithAuth } from './../utils/axiosWithAuth';

function Friends() {
  const initialFriendsValues = {
    id: null,
  name: '',
  age: null,
  email: '',
  }


  const [friends, setFriends] = useState([]);

  return(
    <div className='friend-container'>

    </div>
  );
}

export default Friends;