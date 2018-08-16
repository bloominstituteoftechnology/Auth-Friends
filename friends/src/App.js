import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loading_data } from './store/actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.loading_data();
    }

  render() {
    return (
        <div className="App">
            {this.props.fetchingFriends ? (
                <img src={logo} className="App-logo" alt="logo" />
            ) : (
                <ul>
                    {this.props.friendsFetched.map(friend => {
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
        fetchingFriends: state.friendsReducer.fetchingFriends,
        friendsFetched: state.friendsReducer.friendsFetched,
    };
}

export default connect(mapStateToProps, { loading_data })(App);
