import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend, editForm } from '../actions';

const Friend = props => {
    return (
        <li>
            {props.friend.name}
            <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>    
            <button onClick={() => props.editForm(props.friend)}>Edit</button>
        </li>
    )
}


export default connect(null, {deleteFriend, editForm} )(Friend);