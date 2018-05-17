import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, deleteFriend } from '../actions';

class FriendsList extends Component {

    componentDidMount () {
        this.props.fetchFriends();
    }

    render() {
        return (
            <div>
                {this.props.error ? <div>404 Oh Snap</div> : null}
                {this.props.fetchingFriends ? <div>Loading...</div> : null}
                <ul>
                    {this.props.friends.map(friend => {
                    return (
                        <div>
                            <li key = {friend}> {friend.name}</li>
                            <button onClick={() => this.props.deleteFriend(friend)}>^Delete^</button>
                        </div>
                    );
                })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends,
        error: state.error
    };
  };

export default connect(mapStateToProps, { fetchFriends, deleteFriend })(FriendsList);