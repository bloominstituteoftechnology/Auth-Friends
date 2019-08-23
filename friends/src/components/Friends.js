import React, { useState, useEffect } from 'react';
// import { Route, Redirect } from 'react-router';
import axios from 'axios';
// import { axiosWithAuth } from '../utils/axiosWithAuth.js'

import Friend from './Friend'

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect( () => {
        axios.get('http://localhost:5000/api/friends', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log(response);
            setFriends(response.data)
        })
        .catch(err => console.log("error in get in Friends.js", err.response))
        
    }, [])

    return(
        <div>
            {friends.map((item, index) => {
                return <Friend key={index} name={item.name} age={item.age}/>
            })}
        </div>
    )
}

export default Friends