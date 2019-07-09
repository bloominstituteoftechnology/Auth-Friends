import React from 'react';
import { fetchFriends } from '../actions';
import { connect } from 'react-redux';
import { FriendsList } from '../components';

class FriendsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.fetchFriends();
    }
    render() {
        return (
            <div className="friends-list"><FriendsList friends={this.props.friends} /></div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect(
    mapStateToProps,
    {
        fetchFriends
    }
)(FriendsListView)