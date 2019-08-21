import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

import FriendCard from './FriendCard'
import { getFriendsList } from '../actions'

import { Grid } from 'semantic-ui-react'

const HomePage = ({ getFriendsList }) => {
    const friendsList = useSelector(state => state.friendsList)

    useEffect(() => {
        getFriendsList()
    },[])

    return (
        <Grid columns={3} container fluid='true'>
            {friendsList.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
        </Grid>
    )
}

export default connect(null, { getFriendsList })(HomePage)