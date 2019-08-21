import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import FriendCard from './FriendCard'
import { getFriendsList } from '../actions'

import { Grid, Button } from 'semantic-ui-react'

const HomePage = ({ getFriendsList }) => {
    const friendsList = useSelector(state => state.friendsList)

    useEffect(() => {
        getFriendsList()
    },[])

    return (
        <div>
            <Grid columns={3} container fluid='true'>
                {friendsList.map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </Grid>    
        </div>
    )
}

export default connect(null, { getFriendsList })(HomePage)