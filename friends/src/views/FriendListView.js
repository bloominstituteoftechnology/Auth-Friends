import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../store/actions';

import FriendsList from '../components/Friends/FriendsList';

class FriendListView extends Component {
    componentDidMount() {
        console.log('PROPS', this.props);
        if (this.props.friendsList.length === 0) {
            this.props.getFriends();
        }
    };

    render() {
        return (
            <FriendsList
                {...this.props}
            />
        );
    }
};

const mapStateToProps = state => {
    console.log('STATE ', state);
    return {
        friendsList: state.friendsReducer.friends,
    };
};

export default connect(mapStateToProps, { getFriends })(FriendListView);