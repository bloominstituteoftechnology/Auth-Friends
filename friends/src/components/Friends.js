import React, { Component } from 'react';
import '../styles/Friends.css';

class Friends extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="Friends">
        {this.props.friends
          ? this.props.friends.map(friend => {
              return (
                <div
                  key={friend.name.length + friend.email.length + friend.age}
                >
                  {friend.name}
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Friends;
