import React from 'react';
import { connect } from 'react-redux';
import { FriendsList, AddNewFriendForm } from '../components';
import { fetchFriends, deleteFriends, addFriends } from '../actions';

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
            <div>
                <AddNewFriendForm add = {this.props.addFriends}/>
                 <FriendsList friends = {this.props.friends} deleteFriends = {this.props.deleteFriends} />
            </div>
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
    deleteFriends,
    addFriends }
)(FriendsListView);