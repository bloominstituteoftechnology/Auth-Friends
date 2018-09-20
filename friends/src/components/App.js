import React, { Component } from 'react';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';
export default class App extends Component {
  componentDidMount() {
    this.props.isFetch();
  }
  render() {
    return (
      <div className="App">
        <FriendsList />
        <FriendForm />
      </div>
    );
  }
}
