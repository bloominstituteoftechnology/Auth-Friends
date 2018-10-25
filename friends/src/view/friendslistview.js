import React from 'react';
import { connect } from 'react-redux';
import { FriendsList } from '../components';
import { fetchFriends, deleteFriends } from '../actions';

class FriendsListView extends React.Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        if (this.props.fetchingFriends) {
            return (
                <h1> Collecting all your best friends...</h1>
            )
        }

        return (
            <FriendsList friends = {this.props.friends} deleteFriends = {this.props.deleteFriends} />
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        fetchingFriends: state.friendsReducer.fetchingFriends,
        error: state.friendsReducer.error
    }
}

export default connect (
    mapStateToProps,
    { fetchFriends,
    deleteFriends }
)(FriendsListView);