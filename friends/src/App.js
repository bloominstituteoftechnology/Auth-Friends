import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CreateFriendForm from './components/CreateFriendForm';
import Friends from './components/Friends';
import { getFriends } from './actions/actions';

class App extends Component {


  render() {
    return (
      <div className="container">
        <div className="col-one-half">
        <Friends friends={this.friends} />
        </div>
        <CreateFriendForm />
        {/* <UpdateFriendForm /> */}
      </div>
    );
  }
}



export default App;
