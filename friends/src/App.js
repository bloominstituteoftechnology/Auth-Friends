import React, { Component } from 'react';
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
          <div key={friend.id}>
            <h3>NAME:</h3>
            <span>{friend.name}</span>
            <h3>AGE:</h3>
            <span>{friend.age}</span>
            <h3>EMAIL:</h3>
            <span>{friend.email}</span>
          </div>
        )}
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
