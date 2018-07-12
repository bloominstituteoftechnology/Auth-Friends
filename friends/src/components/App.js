import React from 'react'
import NewFriend from '../containers/NewFriend'
import FriendsList from '../containers/FriendsList'

class App extends React.Component {
  render () {
    return (
      <div>
        <NewFriend />
        <FriendsList />
      </div>
    )
  }
}

export default App
