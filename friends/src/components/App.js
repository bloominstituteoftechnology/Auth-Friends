import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingFriend } from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchingFriend();
        const fetchedFriends = JSON.parse(localStorage.getItem('friendsFetched'));
        if (fetchedFriends !== null) {
            this.props.friendsFetched(fetchedFriends);
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className='App'>
                <ul>
                    {this.props.friends.map(friend => {
                        return <li key={friend.name}>{friend}</li>;
                    })}
                </ul>
            </div>
        );
    }
}


const mapDispatchToProps = state => {
    return {
        friends: state.friendsReducer.friends
    };
};

export default connect(mapDispatchToProps, { fetchingFriend })(App);