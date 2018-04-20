import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {getFriends, updateFriend} from './actions';



class App extends Component {
  constructor(){
    super();
    this.state = {
      updateFriendName: '',
      showUpdateField: false,
      currentFriend: {},

    }
  }

  componentDidMount(){
    this.props.getFriends();
  }

  handleUpdateFriend = (e, friend) => {

    this.setState({
      showUpdateField: !this.state.showUpdateField,
      currentFriend: friend,
    })
  }


  handleSubmitUpdate = (e) => {
    this.props.updateFriend(this.state.updateFriendName)
  }

handleUpdateFieldChange = (e) => {
  this.setState({
    updateFriendName: e.target.value,
  })
}

  render() {
    return (
      <div className="App">
      <ul>
        {this.props.friends.map(friend => <li onClick={(e) => this.handleUpdateFriend(e,friend) }>{friend.name}</li>)}

      </ul>

        {this.state.showUpdateField ? <div><input onChange={this.handleUpdateFieldChange} name='updateField' type="text" value={this.state.updateFriendName}/>
      <button onClick={this.handleSubmitUpdate}> Update</button> </div>: null}




      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state);
  return {

    friends: state.friends,
  }
}
export default connect(mapStateToProps, {getFriends, updateFriend})(App);
