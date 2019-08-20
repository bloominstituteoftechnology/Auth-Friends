import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateFriendState, removeFriend } from '../actions'

const FriendCard = ({ friend, updateFriendState, removeFriend }) => {

    return (
        <div>
            <h1>{friend.name}</h1>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <Link to='/friend-form' onClick={() => updateFriendState(friend)}>Update</Link>
            <button onClick={() => removeFriend(friend)}>Unfriend</button>
        </div>
    )
}

export default connect(null, { updateFriendState, removeFriend })(FriendCard)