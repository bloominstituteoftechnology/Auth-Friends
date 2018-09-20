import React, { Component } from 'react';
import Friends from './components/Friends'
import CreateFriendForm from './components/CreateFriendForm'
import { connect } from 'react-redux'
import { fetchingData, createFriend, updateFriend } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchingData()
  }

  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <CreateFriendForm createFriend={this.props.createFriend} />
        <Friends
          friends={this.props.friends}
          updateFriend={this.props.updateFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, action) => ({
  friends: state.rootReducer.friends,
})

const mapDispatchToProps = {
  fetchingData,
  createFriend,
  updateFriend
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
