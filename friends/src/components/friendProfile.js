import React from 'react';
import { connect } from 'react-redux';

const FriendProfile = props =>{
    const friend = props.friends.find(item => `${item.id}` === props.match.params.id);
    return(
        <div>
            <h1>{friend.name}</h1>
            <p>Age:{friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
        )}

const mapStateToProps = state =>{
    return {
        friends: state.friends
    }
}
export default connect(mapStateToProps)(FriendProfile)