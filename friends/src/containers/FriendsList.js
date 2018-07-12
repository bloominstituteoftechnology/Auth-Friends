import React from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../actions/'

class FriendsList extends React.Component {
  componentDidMount () {
    this.props.fetchFriends()
  }
  render () {
    return (
      <div className='App'>
        {this.props.api.fetching ? (
          <div>Loading ....</div>
        ) : (
          <ul>
            {this.props.friends.map((friend) => {
              return <li key={friend.id}>{friend.name}</li>
            })}
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('in map state', state)
  return {
    friends: state.friends,
    api: state.api
  }
}
export default connect(mapStateToProps, { fetchFriends })(FriendsList)
