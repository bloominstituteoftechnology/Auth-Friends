import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { loading_data } from './store/actions/index';

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
                    {this.props.friends.map(friend => {
                        return <li>
                            {friend.name}
                        </li>;
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
        friends: state.friendsReducer.friends,
    }
}

export default connect(mapStateToProps, { loading_data })(App);
