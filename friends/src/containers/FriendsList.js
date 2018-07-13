import React from 'react'
import { connect } from 'react-redux'
import { fetchFriends, deleteFriend } from '../actions/'
import Friend from '../components/Friend'
import NewFriend from './NewFriend'
import { Link } from 'react-router-dom'

class FriendsList extends React.Component {
  componentDidMount () {
    this.props.fetchFriends()
  }
  render () {
    return (
      <div className='App'>
        <div>
          <NewFriend />
        </div>
        {this.props.api.fetching ? (
          <div>Loading ....</div>
        ) : (
          <div>
            {this.props.friends.map((friend) => {
              return (
                <Link key={friend.id} to={`/friends/${friend.id}`}>
                  <Friend
                    key={friend.id}
                    friend={friend}
                    deleteFriend={deleteFriend}
                  />
                </Link>
              )
            })}
          </div>
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
export default connect(mapStateToProps, { fetchFriends, deleteFriend })(
  FriendsList
)
