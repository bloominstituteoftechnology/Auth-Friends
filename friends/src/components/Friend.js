import React from 'react';
import { deleteFriend } from '../actions';
import { connect } from 'react-redux';

const Friend = (props) => {
   const { friend } = props;
   const   handleEdit = e => {

    }
    const deleteFriend = () => {
        console.log('ID', friend.id)
        props.deleteFriend(friend.id);
    }

    return (
        <div className={'friend'}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={ deleteFriend }>Delete</button>
        </div>
    );
}

export default connect(null, { deleteFriend })(Friend);