import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateFriendState } from '../actions'

const FriendCard = ({ friend, updateFriendState }) => {
    
    return (
        <div>
            <h1>{friend.name}</h1>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <Link to='/friend-form' onClick={() => updateFriendState(friend)}>Update</Link>
        </div>
    )
}

export default connect(null, { updateFriendState })(FriendCard)