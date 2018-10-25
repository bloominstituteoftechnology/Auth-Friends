import React from 'react';
import {connect} from 'react-redux';

import Friend from "./Friend";
import {fetchFriends} from "../actions";

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        if (this.props.fetching) {
            return <h1>Loading friends, please wait...</h1>
        }
        return (
            <div>
            <div className='friend-list-wrapper'>
            {this.props.friends.map(friend => {
                return (
                <Friend key={friend.id} friend={friend}/>
            )})}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        fetching: state.friendsReducer.fetching
    }
}

export default connect(
    mapStateToProps,
    {fetchFriends}
)(FriendsList);