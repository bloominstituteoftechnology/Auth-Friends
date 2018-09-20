import React, { Component } from 'react';
import Friends from './components/Friends'
import CreateFriendForm from './components/CreateFriendForm'
import UpdateFriendForm from './components/UpdateFriendForm'
import { connect } from 'react-redux'
import { fetchingData, createFriend } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchingData()
  }

  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <Friends friends={this.props.friends} />
        <CreateFriendForm createFriend={this.props.createFriend} />
        <UpdateFriendForm />
      </div>
    );
  }
}

const mapStateToProps = (state, action) => ({
  friends: state.rootReducer.friends
})

const mapDispatchToProps = {
  fetchingData,
  createFriend
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
