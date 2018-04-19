import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getFriends} from '../actions';
import Friend from './Friend';

class FriendList extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return <Friend  key={friend.id} name={friend.name}/>
                })}
            </div>
        );
    }
}

const mapDispatchToProps = state => {
    return {
        friends: state.friends,
        gettingFriends: state.gettingFriends
    };
};

export default connect(mapDispatchToProps, {getFriends})(FriendList);