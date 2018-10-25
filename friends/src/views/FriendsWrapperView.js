import React, { Component } from "react";
import { connect } from 'react-redux';

import { Friends } from '../components'

class FriendsWrapperView extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="Friends-Wrapper-view">
        <Friends friends={this.props.friends}/>      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: [
      {
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com',
      },
      {
        id: 2,
        name: 'Austen',
        age: 45,
        email: 'austen@lambdaschool.com',
      },
      {
        id: 3,
        name: 'Ryan',
        age: 15,
        email: 'ryan@lambdaschool.com',
      }
    ]
  }
}
 
export default connect(
  mapStateToProps,
  {

  }
)(FriendsWrapperView);