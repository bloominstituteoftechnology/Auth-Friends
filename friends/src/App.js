import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getFriends, addFriend } from './store/actions';
import { connect } from 'react-redux';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';

class App extends Component {

  componentDidMount(){
  this.props.getFriends();
  }

  render() {
    return (
      <section className="App">
        <CreateFriendForm addFriend={this.props.addFriend} />
        <Friends friends={this.props.friends}/>
      </section>
    );
  }
}

const mapDispatchToProps = state => ({
  friends: state.friends
})

export default connect(mapDispatchToProps, { getFriends, addFriend })(App);
