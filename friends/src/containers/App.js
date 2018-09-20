import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import Friends from '../components/Friends';
import CreateFriendForm from '../components/CreateFriendForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <h2>fetching friends...</h2>
        ) : (
          <div>
            <Friends friends={this.props.friends}/>
            <CreateFriendForm />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friendReducer.friends,
    fetching: state.friendReducer.fetchingFriends
  }
}

export default connect(mapStateToProps, { fetchFriends })(App);
