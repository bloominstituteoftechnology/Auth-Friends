import React, { Component } from 'react';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="Friends">
        {this.props.friends.map( (friend, i) => {
          return <div className="friend">{friend.name}</div>
        })

        } 
      </div>
    );
  }
}
 
export default Friends;