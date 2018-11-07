import React from 'react';
import {connect} from 'react-redux';

import FriendCard from './FriendCard';

const FriendsList = (props)=>{
    return(
        <div>
            {
                props.fetching ?
                <div>Loading Friend Data...</div> :
                <ul>
                    {props.friends.map(friend=><FriendCard key={friend.id} friend={friend}/>)}
                </ul>
            }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        friends: state.friends,
        fetching: state.fetching
    }
}

export default connect(mapStateToProps)(FriendsList);