import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingFriend, savingFriends } from '../actions';

class App extends Component {
    componentDidMount() {
        console.log('cdm')
        this.props.fetchingFriend();
    };

    render() {
        return (
            <div className='App'>
                <ul>
                    {this.props.friends.map(friend => {
                        return (
                            <li key={friend.id}>
                                {friend.name}
                                {friend.age}
                                {friend.email}
                            </li>
                        )
                    })}
                </ul>
                <div className='newFriend'>Add New Friend</div>
                <form>
                    <input type='text' />
                    <input type='text' />
                    <input type='number' />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = state => {
    return {
        friends: state.friendsReducer.friends
    };
};

export default connect(mapDispatchToProps, { fetchingFriend, savingFriends })(App);