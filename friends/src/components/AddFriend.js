import React, { Component } from 'react';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      email: ''
    };
  };

  render(){
    return(
      <div>Friend Form</div>
    );
  }

};

export default AddFriend;