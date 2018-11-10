import React from 'react';
import Friend from 'friends';
import { connect } from 'react-redux';

const FriendProfile = props =>{
    const friend = props.friends.find(item => item.id === Number(props.match.params.id));
    return(<Friend />
})

const mapStateToProps = state =>{
    return {
        friends: state.friends
    }
}
export default connect(mapStateToProps)(FriendProfile)