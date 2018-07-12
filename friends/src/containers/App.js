import React from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../actions/'

class App extends React.Component {
  componentDidMount () {
    this.props.fetchFriends()
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    api: state.api
  }
}
export default connect(mapStateToProps, { fetchFriends })(App)
