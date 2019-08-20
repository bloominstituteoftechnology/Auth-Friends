import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

import FriendCard from './FriendCard'
import { getFriendsList } from '../actions'

const HomePage = ({ getFriendsList }) => {
    const friendsList = useSelector(state => state.friendsList)

    useEffect(() => {
        getFriendsList()
    },[])

    return (
        <div>
            <h1>My Friends:</h1>
            {friendsList.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
        </div>
    )
}

export default connect(null, { getFriendsList })(HomePage)