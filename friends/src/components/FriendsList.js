import React from 'react';
import Friend from './Friend';
import {Main} from './../styles'

const FriendsList = props => {
    return (
        <Main>
            {props.friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />
            })}
        </Main>
    )
}

export default FriendsList