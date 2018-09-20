import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from './components/FriendsList';
import './styles/App.css';
import { fetchData } from './actions';
class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetchingData ? (
          <h1>Friends List</h1>
        ) : (
          <FriendsList friends={this.props.friends} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    fetchingData: state.friendsReducer.fetchingData,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
  };
};
export default connect(
  mapStateToProps,
  {
    fetchData,
  }
)(App);