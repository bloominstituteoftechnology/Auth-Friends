import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Friends from './Components/Friends';
import CreateFriendForm from './Components/CreateFriendForm';
import UpdateFriendForm from './Components/UpdateFriendForm';
import { fetchFriends } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <Friends />
        <CreateFriendForm />
        <UpdateFriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return{
  }
}

export default connect(mapStateToProps, { fetchFriends }) (App);
