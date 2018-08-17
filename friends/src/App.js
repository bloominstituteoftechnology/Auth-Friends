import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, addFriend, updateFriend, deleteFriend } from './actions';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import logo from './logo.svg';

class App extends Component {
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const { name, age, email } = this.state;
    this.props.addFriend(e, { name, age, email, isNew: true });
  }

  update = e => {
    const { name, age, email } = this.state;
    this.props.updateFriend(e, { name, age, email });
  };

  delete = e => {
    this.props.deleteFriend(e);
  };

  /* Lifecycle methods */

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Friends</h1>
        </header>
        <FriendForm 
          onChange={this.onChange} 
          onSubmit={this.onSubmit} 
        />
        <Friends 
          friends={this.props.friends} 
          update={this.update} 
          del={this.delete}
        />
        <footer>
          This friends list is a compilation of my and/or your friends, and no
          one else's.
          <br /> Fake Copyright Company &copy;
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ friendsReducer }) => {
  const { friends } = friendsReducer;
  return { friends };
};

export default connect(mapStateToProps, { fetchFriends, addFriend, updateFriend, deleteFriend })(App);
