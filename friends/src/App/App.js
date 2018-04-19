import React, { Component } from 'react'
import { connect } from 'react-redux'

import Friends from '../components/Friends'
import { fetchFriends } from '../actions'

class App extends Component {
  componentDidMount () {
    this.props.fetchFriends()
  }
  render () {
    return (
      <div className='App'>
        <Friends greet='hello' />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  error: null,
  fetchingFriends: false,
  FriendsFetched: false
})
export default connect(mapStateToProps, { fetchFriends })(App)
