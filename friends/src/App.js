import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {getFriends, updateFriend} from './actions';

class App extends Component {
  constructor(){
    super();

    this.state = {
      friendNameInputFieldValue: '',
      showUpdateNameInput: false,
      selectedFriend: {},
    }
  }

  componentDidMount(){
    this.props.getFriends();
  }

  handleClickFriend = (e, friend) => {
    this.setState({
      showUpdateNameInput: true,
      selectedFriend: friend,
      friendNameInputFieldValue: friend.name
    })
  }

  handleNameFieldChange = (e) => {
    this.setState({
      friendNameInputFieldValue: e.target.value,
    })
  }

  handleSubmitUpdateName = (e) => {
    const updatedFriend = {...this.state.selectedFriend, name: this.state.friendNameInputFieldValue} ;
    this.props.updateFriend(updatedFriend);

    this.setState({
      showUpdateNameInput: false,
      friendNameInputFieldValue: ''
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.friends.map(friend => <li onClick={(e) => this.handleClickFriend(e, friend) }>{friend.name}</li>)}
        </ul>

        {this.state.showUpdateNameInput ? <div><input onChange={this.handleNameFieldChange} type="text" value={this.state.friendNameInputFieldValue}/>
          <button onClick={this.handleSubmitUpdateName}> Update</button> </div>: null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps, {getFriends, updateFriend})(App);
