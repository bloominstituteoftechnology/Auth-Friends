import React from 'react'
import FriendsList from '../containers/FriendsList'
import { Route } from 'react-router-dom'
import FriendDetails from '../containers/FriendDetails'

class App extends React.Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={FriendsList} />
        <Route path='/friends/:id' component={FriendDetails} />
      </div>
    )
  }
}

export default App
