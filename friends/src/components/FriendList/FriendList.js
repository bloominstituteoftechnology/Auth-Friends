import React from 'react'
import Friend from './Friends';

const FriendList = props => {
    function itemSelected(e, friend) {
        props.history.push(`/api/friends/${friend.id}`)
    }

    return(
        <div>
            {props.friends.map(friend => {
                return(
                    <div key={friend.id} onClick={e => itemSelected(e, friend)}>
                        <Friend  friend={friend} />
                    </div>
                )
            })}
        </div>
    )
}

export default FriendList;