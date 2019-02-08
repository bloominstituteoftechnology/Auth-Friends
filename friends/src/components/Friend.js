import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend, editFriend } from '../actions';

const Friend = props => {
    return (
        <li>
            {props.friend.name}
            <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>    
            <button onClick={() => props.editFriend(props.friend.id)}>Edit</button>
        </li>
    )
}


export default connect(null, {deleteFriend, editFriend} )(Friend);