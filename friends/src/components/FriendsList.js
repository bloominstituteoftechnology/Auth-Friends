import React from 'react';
import { connect } from 'react-redux';

const FriendsList = props => {
    console.log(props.friends.friends);
    return(
        <div>
            {props.friends.friends.map((friend) => {
                return <p key={Date.now()}>{friend.name}</p>
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
    }
}

export default connect(mapStateToProps, null)(FriendsList);