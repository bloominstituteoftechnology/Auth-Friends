import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions/Friends';

class Friends extends Component {

  handleDelete = () => {
    const { id } = this.props.select;
    this.props.deleteFriend(id);
  };

  render() {
  return (
    <div>
        <ul>
            {this.props.friends.map(friend => {
                return (
                <li key={friend}>{friend.name}
                  <button onClick={() =>
                    this.handleDelete()}>{'X'}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    error: state.friends_reducer.error,
    select: state.friends_reducer.select
  };
};

export default connect(mapStateToProps, {
  deleteFriend
})(Friends);
