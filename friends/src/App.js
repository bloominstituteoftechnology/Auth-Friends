import React, { Component } from 'react';
import './App.css';
import CreateFriendForm from './components/CreateFriendForm';
import Friends from './components/Friends';

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
