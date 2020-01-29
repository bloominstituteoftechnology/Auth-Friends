import React, { useState, useEffect } from 'react';
import FriendsCard from './FriendsCard';
import { axiosWithAuth }from '../utils/axiosWithAuth';

// import FriendsForm from './FriendsForm';



const FriendsList = (props) => {
    useEffect(() => {  
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log('success', res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/protected/list');
        })
        .catch(err => console.log(err));
        
    });

return(
    <div>
    <h2>Friends!</h2>
    {props.map(item  =>
        <FriendsCard 
        className="friend-card"
        key={item.id} 
        name={item.name}
        age={item.age}
        email={item.email} />
    )}
    </div>
)
}

export default FriendsList