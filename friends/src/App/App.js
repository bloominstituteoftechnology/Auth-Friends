import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Friends, UpdateFriendForm } from '../components'
import { fetchFriends } from '../actions'

class App extends Component {
  componentDidMount () {
    this.props.fetchFriends()
  }
  render () {
    return (
      <div className='App'>
        <Friends friends={this.props.friends.friends} />
        <UpdateFriendForm />
      </div>
    )
  }
}

App.propTypes = {
  fetchFriends: PropTypes.func,
  friends: PropTypes.object
}

const mapStateToProps = state => ({
  friends: state.friends,
  error: null,
  fetchingFriends: false,
  FriendsFetched: false
})
export default connect(mapStateToProps, { fetchFriends })(App)
