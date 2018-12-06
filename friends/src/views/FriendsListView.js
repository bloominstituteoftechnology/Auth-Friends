import React from 'react';
import { connect } from 'react-redux';

import FriendsList from '../components/FriendsList';

import { getFriends } from '../store/actions';

class FriendsListView extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div>
                {this.props.error ? <h2>Oh no! Something went wrong...</h2> : null}
                {this.props.fetchingFriends ? <h2>Loading friends...</h2>: null}
                <FriendsList friends={this.props.friends} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends,
        error: state.error
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsListView);