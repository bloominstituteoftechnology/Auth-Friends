import React, { Component } from "react";
import FormStyled from "../styledComponents/FormStyled";
import { connect } from "react-redux";
import { addFriend } from "../actions/actions";

class Form extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  updateField = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewFriend = event => {
    const { name, age, email } = this.state;
    this.props.addFriend({ name, age, email });
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <FormStyled>
        <form>
          <h3>Add a Friend</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.updateField}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.updateField}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.updateField}
          />
          <button type='button' onClick={() => this.addNewFriend()}>Add New Friend</button>
        </form>
      </FormStyled>
    );
  }
}

// why does this one not need { friendsReducer } = state;, but App does?
const mapStateToProps = state => {
  return {
    error: state.error,
    addingFriend: state.addingFriend
  };
};

export default connect(mapStateToProps, { addFriend })(Form);
