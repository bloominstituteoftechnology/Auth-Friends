import React from 'react';
import { fetchFriends } from '../actions';
import { connect } from 'react-redux';
import { FriendsList, LoginInfo } from '../components';

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
            <div>
            <LoginInfo key="3" parent={this} />
            <div className="friends-list"><FriendsList friends={this.props.friends} /></div>
            </div>
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