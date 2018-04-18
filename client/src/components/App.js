import React, { Component } from 'react'
import { Route } from 'react-router'
import { FriendsList, FriendForm } from '.'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/edit/:id' render={(props) => (
          <FriendForm {...props} key={props.match.params.id} />
        )} />
        <Route exact path='/' component={FriendForm} />
        <Route path='/' component={FriendsList} />  
      </div>
    )
  }
}

export default App
