import React from 'react';
import { deleteFriend, startEditing } from '../actions';
import { connect } from 'react-redux';

const Friend = (props) => {
   const { friend } = props;
   const editFriend = e => {
       props.startEditing(friend);
    };
    const deleteFriend = () => {
        console.log('ID', friend.id)
        props.deleteFriend(friend.id);
    };

    return (
        <div className={'friend'}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={ editFriend }>Edit</button>
            <button onClick={ deleteFriend }>Delete</button>
        </div>
    );
}

export default connect(null, { deleteFriend, startEditing })(Friend);