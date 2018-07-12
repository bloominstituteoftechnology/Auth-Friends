import React from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../actions/'

class App extends React.Component {
  componentDidMount () {
    this.props.fetchFriends()
  }
  render () {
    console.log(this.props.friends, this.props.api.fetching)
    return (
      <div className='App'>
        {this.props.api.fetching ? (
          <div>Loading ....</div>
        ) : (
          <ul>
            {this.props.friends.map((friend) => {
              return friend.map((friend, index) => {
                return <li key={friend.name + index}>{friend.name}</li>
              })
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
export default connect(mapStateToProps, { fetchFriends })(App)
