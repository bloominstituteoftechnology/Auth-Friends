import React, { Component } from 'react';
import AddFriendForm from './components/AddFriendForm'
import { connect } from 'react-redux'
import { getFriends } from './actions/index'

class App extends Component {
  componentDidMount() {
    this.props.getFriends()
  }
  render() {
    return (
      <div>
        {this.props.friends.map(friend => 
          <div key={friend.id} style={{border: '1px solid black'}}>
            <h3>NAME:</h3>
            <span>{friend.name}</span>
            <h3>AGE:</h3>
            <span>{friend.age}</span>
            <h3>EMAIL:</h3>
            <span>{friend.email}</span>
          </div>
        )}
        <AddFriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    friends: state
  }
)

export default connect(mapStateToProps, { getFriends })(App);
