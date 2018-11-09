import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css'
import Friend from './Friend';
import { getInfo } from './Actions'

class Friends extends Component {
  
  componentDidMount() {
    // call our action
    this.props.getInfo()
  }
  render() {
    if (this.props.loading) {
      return (
        <p>Loading Friends</p>
        // return something here to indicate that you are fetching data
      )
    }
    return (
      <div className="friends">
        <h1>Friends</h1>
        {this.props.friends.map(friend => {
          return (
            <Friend 
              name={friend.name}
              id={friend.id}
              age={friend.age}
              email={friend.email}
              key={friend.id} />
          );
        })}
            </div >
    );
  }
}


const mapStateToProps = state => {
  return {
    loading: state.fetchingFriends,
    friends: state.friends
  };

};

export default connect(
  mapStateToProps,
  {
    getInfo
    /* action creators go here */
  }
)(Friends);

