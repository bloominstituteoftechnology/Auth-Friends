import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend, editForm } from '../actions';
import { FaEdit, FaTrash } from 'react-icons/fa';


const Friend = props => {
    return (
        <li>
            {props.friend.name}
            {props.friend.age}
            {props.friend.email}
            <button onClick={() => props.deleteFriend(props.friend.id)}><FaTrash /></button>    
                
            <button onClick={() => props.editForm(props.friend)}>
                <FaEdit />
            </button>
        </li>
    )
}


export default connect(null, {deleteFriend, editForm} )(Friend);