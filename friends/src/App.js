import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import{getFriends, updateFriend} from './actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      updateFriendName: '',
      showUpdateField: false,
      currentFriend: {},
    }
  }

  componentDidMount() {
    this.props.getFriends();
  }

  handleUpdateFriend = (e, friend) => {
    this.setState({
      showUpdateField: !this.state.showUpdateField,
      currentFriend: friend
    })
  }
  
  handleSubmitUpdate = (e) => {
    const updateFriend = {...this.state.currentFriend, name: this.state.updateFriendName };
    this.props.updateFriend(updateFriend);
  }

  handleUpdateFieldChange = (e) => {
    this.setState ({
      updateFriendName: e.target.value
    })
  }

  render() {
    return(
      <div className="App">
        <ul className="ul">
          {this.props.friends.map(friend => <li onClick = {(e) => this.handleUpdateFriend(e, friend) }>{friend.name}</li>)}
        </ul>
          {this.state.showUpdateField ? <div><input onChange = {this.handleUpdateFieldChange} name = 'updateField' type='text' value={this.state.updateFriendName}/>        
        <button onClick={this.handleSubmitUpdate}> Update</button></div>:null}
      </div>
    );
  }
}

const mapDispatchtoProps = state => {
  return {
    friends: state.friends,
  };
};

export default connect (mapDispatchtoProps,{getFriends, updateFriend})(App);