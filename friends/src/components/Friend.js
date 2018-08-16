import React, { Fragment } from "react";
import { connect } from "react-redux";
import { updateFriend, deleteFriend } from "../actions";

class Friend extends React.Component {
  state = {
    edit: false,
    name: "",
    age: "",
    email: "",
  };

  componentDidMount() {
    this.setState({
      name: this.props.friend.name,
      age: this.props.friend.age,
      email: this.props.friend.email,
    });
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateFriend(this.props.friend.id, this.state);
    this.setState({ edit: false });
  };

  render() {
    return (
      <Fragment>
        <div>
          <span onDoubleClick={this.toggleEdit} style={{ cursor: "pointer" }}>
            {this.props.friend.name}
          </span>
          <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>Delete?</button>
        </div>
        {this.state.edit && (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input type="submit" value="update" />
          </form>
        )}
      </Fragment>
    );
  }
}

export default connect(
  null,
  {
    updateFriend,
    deleteFriend
  }
)(Friend);
