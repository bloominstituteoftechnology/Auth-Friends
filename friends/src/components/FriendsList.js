import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getFriends } from '../actions/friendsActions'
import Friend from './Friend'

class FriendsList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getFriends()
  }

  render(){
    return (
      <div className="container">
        { this.props.loading ? <h1>LOADING</h1> : null }

        { this.props.error !== '' ? <h1>{this.props.error}</h1> : null }

        <div className="friend-list-grid">
        { this.props.friends.map( friend => <Friend friend={friend} key={friend.id}/> ) } 
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getFriends })(FriendsList)