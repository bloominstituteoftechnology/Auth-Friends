import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriend, editFriend } from '../actions';

class FriendPage extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.editFriend({ id: this.props.friend.id, ...this.state });
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.id);
    this.setState({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.fetching ? (
          <p>Reticulating Splines...</p>
        ) : (
          <div className="FriendPage">
            <h3>{this.props.friend.name}</h3>
            <p>{this.props.friend.age}</p>
            <p>{this.props.friend.email}</p>
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                required
              />
              <input
                type="text"
                value={this.state.age}
                name="age"
                onChange={this.changeHandler}
                required
              />
              <input
                type="text"
                value={this.state.email}
                name="email"
                onChange={this.changeHandler}
                required
              />
              <input type="submit" value="Edit Friend" />
            </form>
          </div>
        )}
        {this.props.error ? <p>{this.props.error}</p> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  friend: state.friendsReducer.friend,
  fetching: state.friendsReducer.fetching,
  error: state.friendsReducer.error
});

export default connect(
  mapStateToProps,
  { fetchFriend, editFriend }
)(FriendPage);
