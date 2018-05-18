import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFriend } from './friendsActions';
import logo from './logo.svg';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      newfriend: ''
    };
  }

  handleFriendName = e => {
    this.setState({ newFriend: e.target.value });
  };

  saveHandler = () => {
    const newFriend = {
      name: this.state.newFriend,
      id: this.props.friend.id
    };
    if (newFriend.name !== '') {
      this.props.createFriend(newFriend);
    }

    this.setState({ showForm: false, newFriend: '' });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.editing ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
            {this.props.friend.name}
            {this.state.showForm ? (
              <input
                onChange={this.handleFriendName}
                value={this.state.newFriend}
                placeholder={`Edit ${this.props.friend.name}`}
              />
            ) : null}
            {!this.state.showForm ? (
              <button onClick={() => this.setState({ showForm: true })}>
                Edit
              </button>
            ) : (
              <button onClick={this.saveHandler}>Save Change</button>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    editing: state.editing
  };
};

export default connect(mapStateToProps, { createFriend })(Friend);

