import React from 'react';
import { connect } from 'react-redux';

import { fetchFriends } from '../store/actions';

import Friends from '../components/Friends';

class FriendContainer extends React.Component {
    state = {
        inputText: ''
    };
    componentDidMount = () => {
        this.props.fetchFriends();
    }
    handleChange = event => this.setState({ inputText: event.target.value });

    addFriend = event => {
        event.preventDefault();
        
    };

    render() {
        return (
            <Friends 
                friends={this.props.friends}

            />
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect(mapStateToProps, { fetchFriends })(FriendContainer);