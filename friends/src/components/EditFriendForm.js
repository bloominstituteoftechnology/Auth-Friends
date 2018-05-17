import React, { Component } from "react";
import { connect } from "react-redux";
import { submitFriend } from "../actions";

class EditFriendForm extends Component {
  state = {
    id: "",
    name: "",
    age: "",
    email: ""
  };

  componentDidMount = () => {
    const { id, name, age, email } = this.props;
    this.setState({
      id,
      name,
      age,
      email
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { id, name, age, email } = this.state;
    return (
      <div>
        <input
          name="name"
          placeholder="name"
          value={name}
          onChange={e => this.handleChange(e)}
        />
        <input
          name="age"
          placeholder="age"
          value={age}
          onChange={e => this.handleChange(e)}
        />
        <input
          name="email"
          placeholder="email"
          value={email}
          onChange={e => this.handleChange(e)}
        />
        <button
          onClick={() => this.props.submitFriend({ id, name, age, email })}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friends } = state.friendsReducer;
  return friends.filter(friend => friend.Editing)[0];
};

export default connect(mapStateToProps, { submitFriend })(EditFriendForm);
