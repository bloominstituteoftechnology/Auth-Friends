import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend, editForm } from '../actions';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Friend = props => {
    return (
        <div className="friend-card">
        
            <div className="card-detail">
                <h2>{props.friend.name}</h2>
            </div>
            <div className="card-detail">
                <h3>{props.friend.age}</h3>
            </div>
            <div className="card-detail">
                <h4>{props.friend.email}</h4>
            </div>
            <Button variant="warning" onClick={() => props.editForm(props.friend)}>
                Edit <FaEdit />
            </Button>
            <Button variant="danger" onClick={() => props.deleteFriend(props.friend.id)}>
                Delete <FaTrash />
            </Button>    
            
        </div>
            
    )
}


export default connect(null, {deleteFriend, editForm} )(Friend);