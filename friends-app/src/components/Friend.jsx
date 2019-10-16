import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = props => {
    const deleteFriend = id => {
        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then(res => props.updateFriends(res.data))
            .catch(err => console.log(err.response))
    }

    return(
        <div className={`friend-info friend-${props.friend.id}`}>
            <h3>{props.friend.name}</h3>
            <p>Friend ID: {props.friend.id}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <button onClick={e => deleteFriend(props.friend.id)} >Unfriend {props.friend.name}</button>
        </div>
    )
}

export default Friend