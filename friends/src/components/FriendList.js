import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getFriends} from '../actions';
import Friend from './Friend';
import './Friends.css'
class FriendList extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div className='Friendlist'>
                {this.props.friends.map(friend => {
                    return <Friend  key={friend.id} name={friend.name} email={friend.email} age={friend.age}/>
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