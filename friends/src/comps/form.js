import React from 'react';
import {connect} from 'react-redux';
import {addfriend} from '../actions/actions.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  gatherInput = e => {
    this.setState({[e.target.id]: e.target.value});
  };

  submitNewFriend = e => {
    e.preventDefault();
    let newFriend = {...this.state};
    newFriend.id = this.props.id;
    this.props.addfriend(newFriend, this.props.friendsEmails);
  };

  render() {
    return (
      <div className="formCont">
        <form className="form" onSubmit={this.submitNewFriend}>
          <h2 className="formHead">Add Friend</h2>
          <div className="nameCont">
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" onChange={this.gatherInput} />
          </div>
          <div className="age">
            <label htmlFor="age">Age: </label>
            <input id="age" type="text" onChange={this.gatherInput} />
          </div>
          <div className="email">
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" onChange={this.gatherInput} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mstp = state => {
  const ids = state.friends.map(fr => {
    return fr.id;
  });
  const largestId = Math.max(...ids);
  return {
    id: largestId + 1,
    friendsEmails: state.friends.map(fr => {
      return fr.email;
    }),
  };
};

export default connect(
  mstp,
  {addfriend},
)(Form);
