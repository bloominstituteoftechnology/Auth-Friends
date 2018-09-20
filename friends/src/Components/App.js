import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import { fetchFriends } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
    // call our action
    
  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <p>Gathering friends list...</p>
        ) : (
          <div>
            <ul>
              {this.props.friends.map(friend => {
                return <li key={friend.name}>{friend.name}</li>;
              })}
            </ul>
            <form>
              <input type="text" placeholder=""/>
              <button onClick={this.handleSubmit}>Made a new friend?</button>
            </form>
          </div>  
        )}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    friends: state.friendsReducer.friends,
		fetching: state.friendsReducer.fetching,
  };
}


export default connect(mapDispatchToProps, { fetchFriends })(App)