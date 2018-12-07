import React, { Component } from 'react';
import './App.css';
import Friends from "./Friends"
import {connect} from "react-redux"
import {fetchFriends} from "./Actions"

class App extends Component {

  componentDidMount(){
    this.props.fetchFriends()
  }
  
  render() {
        if(this.props.fetching){
          return (
            <div className="App">
              <h1>Friends</h1>
              <div>Fetching...</div>
            </div>
          )
        } else if(this.props.error) {
          if(this.props.friends.length !== 0){
            alert("Received Server Error. Cannot Add new friend")
            return (
              <div className="App">
                <h1>Friends</h1>
                <Friends friends={this.props.friends}/>
              </div>
            );
          } else {
            return (
              <div className="App">
                <h1>Friends</h1>
                <div>Received Server Error. Try refreshing the page.</div>
              </div>
              )
          }
        }else{
          return (
            <div className="App">
              <h1>Friends</h1>
              <Friends friends={this.props.friends}/>
            </div>
          );
        } 
  }
}

const mapStateToProps = (state) => {
  return {friends:state.friends,error:state.error,fetching:state.fetching}
}

export default connect(mapStateToProps,{fetchFriends})(App);