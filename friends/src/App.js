import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getFriends } from '../src/actions'
import FriendsList from './components/FriendsList'
import UpdateFriends from './components/UpdateFriends'
import styled from 'styled-components'

const FriendDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly
`

class App extends Component {
  
  componentDidMount(){
    this.props.getFriends('http://localhost:5000/api/friends/')
  }

  render() {
    return (
      <div className="App">
        <UpdateFriends/>
        <FriendsList fetching={this.props.fetching} friends={this.props.friends}/>
        <FriendDiv>
        <div>
          <label htmlFor="name">Name: </label><span>{this.props.friend.name}</span>
        </div>
        <div>
          <label htmlFor="email">Email: </label><span>{this.props.friend.email}</span>
        </div>
        <div>
          <label htmlFor="age">Age: </label><span>{this.props.friend.age}</span>
        </div>  
        </FriendDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    fetching:state.fetching,
    friend : state.friend,
  }
}
export default connect(mapStateToProps, {getFriends})(App);
