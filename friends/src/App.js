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

    }
  }

  componentDidMount(){
    this.props.getFriends();
  }

  handleUpdateFriend(e, friend){
    this.setState({
      showUpdateField: !this.state.showUpdateField,
    })
  }


  handleSubmitUpdate(e){

  }


  render() {
    return (
      <div className="App">
      <ul>
        {this.props.friends.map(friend => <li onClick={() => this.handleUpdateFriend(friend) }>{friend.name}</li>)}

      </ul>

        {this.state.showUpdateField ? <div><input type="text" value={this.state.updateFriendName}/>
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
