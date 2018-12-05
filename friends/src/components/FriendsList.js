import React from 'react';
import Friend from './Friend';
import {Main, H1} from './../styles'

const FriendsList = props => {
    return (
        <Main>
            <H1>Current Friends</H1>
            {props.friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />
            })}
        </Main>
    )
}

export default FriendsList