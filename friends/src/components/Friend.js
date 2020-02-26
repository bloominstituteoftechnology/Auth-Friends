import React, { useState, useEffect } from 'react';
import {axiosWithAuth } from '../utils/axiosWithAuth';

function Friend(props) {
    const [friend, setFriend] = useState({});

    useEffect(() => {
        setFriend(props.friend);
    }, [props.friend]);

function deleteFriend() {
    axiosWithAuth()
    .delete(`/api/friend/${friend.id}`)
    .then(res => {
        alert('You just lost a friend!');
        console.log('deleted friend', res);
    })
    .catch(err => console.log('error deleting friend', err))
    .finally(() => window.location.reload());
}


return (
    <div className='friend'>
        <h1>{friend.name}</h1>
        <h2>Email: {friend.email}</h2>
        <h2>Age: {props.friend.age}</h2>
        <button onClick={deleteFriend}>Block This 'Friend'</button>
    </div>
);
}

export default Friend;