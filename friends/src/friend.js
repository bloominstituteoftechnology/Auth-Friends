import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Friend = props => {
    const {friend, deleteFriend} = props
    
    const clickHandler = () => {
        deleteFriend(friend.id)
    }

    return (
        <div key={friend.id} className='friend-card'>
            <p className="close-button" onClick={clickHandler}>x</p>
            <h2>{friend.name}</h2>
            <h2>{friend.email}</h2>
            <h2>{friend.age}</h2>
        </div>
    )
}

const meepSteetTeePreeps = () => ({});
export default connect(meepSteetTeePreeps, {deleteFriend})(Friend)