import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';

import { getFriends } from '../Actions';

class Friends extends Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div className="App">
                {this.props.fetchingFriends ? (
                <img src={logo} className="App-logo" alt="logo" />
                ) : (
                <ul>
                    {this.props.friends.map(friend => {
                    return <li key={friend.name}>{friend.name}</li>;
                    })}
                </ul>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.friendsFetched
    }
}

export default connect(mapStateToProps, { getFriends })(Friends)

