import React from 'react';
import Friend from '../components/Friend';
import { connect } from 'react-redux';

const FriendsList = (props) => {
    return (
        <div>
            {props.friends.map(friend => {
                return <Friend friend={friend} />
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return{
        friends: state.friends,
    }
}

export default connect(mapStateToProps, {})(FriendsList);