import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Form from './Form';
import { getFriend } from '../actions';

class Friend extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  get id() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    this.props.getFriend(this.id);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (!this.props.friend) {
      return (
        <div>Loading friend...</div>
      )
    }

    return (
      <div className="friend-wrapper">
        <h3>{this.props.friend.name}</h3>
        <h3>{this.props.friend.age}</h3>
        <h3>{this.props.friend.email}</h3>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    friend: dispatch.friendsReducer.friend
  }
}

export default connect(mapDispatchToProps, { getFriend })(Friend);