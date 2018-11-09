import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css'
import Friend from './Friend';
import { getinfo } from './Actions'

class Friends extends Component {
  
  componentDidMount() {
    // call our action
    this.props.getinfo()
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
              key={friend.id}
              delete={this.props.delete}
            />
          );
        })}
            </div >
    );
  }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    loading: state.fetchingFriends,
    friends: state.friends
  };

};

export default connect(
  mapStateToProps,
  {
    getinfo
    /* action creators go here */
  }
)(Friends);

