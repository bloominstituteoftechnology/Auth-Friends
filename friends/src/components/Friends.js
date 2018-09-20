import React, { Component } from 'react';

export default class Friends extends Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        {this.props.friends.map(friend => {
          return {
            <div className = 'friends-info'>
              <h3>{friend.name}</h3>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          }
        })
      };
      </div>
    );
  };
};
