import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    console.log(this.props.friends);
    return (
      <div className="App">

        {
          this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) :
            <div>
              <CreateFriendForm />
              <Friends friends={this.props.friends} />
            </div>
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetchingFriends
  }
}

export default connect(mapStateToProps, { getFriends })(App);
