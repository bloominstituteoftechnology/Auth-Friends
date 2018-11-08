import React from 'react';
import { connect } from 'react-redux';

import Friend from './Friend'
import { getFriends } from '../actions/index';

class Friends extends React.Component {

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <div>
        { this.props.loading ? <h1>I'm updating your friends list... give me a sec</h1> : null }

        { this.props.error !== '' ? <h2>{this.props.error}</h2> : null }

        { this.props.friends.map( friend => <Friend friend={friend} key={friend.id} />) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.fetchingFriends
  }
}

export default connect(mapStateToProps, { getFriends })(Friends);