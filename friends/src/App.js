import React, { Component } from 'react';
import { getFriends } from './actions/index';
import { connect } from 'react-redux';
import Friends from './components/Friends';
import FriendsForm from './components/FriendsForm';

class App extends Component {
    componentDidMount() {
        this.props.getFriends();
    }

render() {
    return (
        <div>
        <h1>My Friends</h1>
        <Friends friends={this.props.friends} />
        <FriendsForm />
        </div>
    )
}
}

const mapStateToProps = state => {
    const { friendsReducer } = state;
    return {
        friends: friendsReducer.friends,
        gettingFriends: friendsReducer.gettingFriends,
        error: friendsReducer.error
    };
};

export default connect(mapStateToProps, {getFriends})(App);