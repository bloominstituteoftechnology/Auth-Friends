import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dataFetch } from './actions/index'
import { Friends } from './components/Friends'
import {CreateFriendForm} from './components/CreateFriendForm'
import { dataPost } from './actions/index'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dataFetch();
  }
  render() {
    return (
      <div className="App">
        <Friends friends={this.props.friends} fetchingFriends={this.props.fetchingFriends}/>
        <CreateFriendForm dataPost={this.props.dataPost}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.dataFetchReducer.friends,
    fetchingFriends: state.dataFetchReducer.fetchingFriends,
    friendsFetched: state.dataFetchReducer.friendsFetched,
    error :state.dataFetchReducer.error
  }
}

export default connect(mapStateToProps, {dataFetch ,dataPost})(App);
