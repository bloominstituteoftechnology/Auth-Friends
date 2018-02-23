import React from 'react';
import { deleteFriend } from '../actions';
import { connect } from 'react-redux';

class Friends extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        {this.props.friends.map((friend, index) => {
          return (
            <ul key={index} id={index} style={ { listStyle: 'none' } }>
              <li>Name: {friend.name}</li>
              <li>Age: {friend.age}</li>
              <li>Email: {friend.email}</li>
              <button onClick={() => this.props.deleteFriend(index)}>Delete</button>
            </ul>
          );
        })}
      </div>
    );
  }
};

export default connect(null, { deleteFriend })(Friends);