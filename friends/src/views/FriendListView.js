import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFriends, removeFriend } from '../store/actions';

import FriendsList from '../components/Friends/FriendsList';

class FriendListView extends Component {
    componentDidMount() {
        if (this.props.friendsList.length === 0) {
            this.props.getFriends();
        }
    };

    handleDeleteFriend = id => {
        this.props.removeFriend();
    }

    render() {
        return (
            <FriendsList
                {...this.props}
                handleDelete={this.handleDeleteFriend}
            />
        );
    }
};

const mapStateToProps = state => {
    return {
        friendsList: state.friendsReducer.friends,
    };
};

export default connect(mapStateToProps, { getFriends, removeFriend })(FriendListView);