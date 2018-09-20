import React from "react";
import { connect } from "react-redux";
import "../../containers/App/App.css";
import { getFriend, deleteFriend } from "../../actions";

class Friend extends React.Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  get id() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    this.props.getFriend(this.id);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteFriend = () => {
    const { id } = this.props.friend;
    this.props.deleteFriend(id);
    const newState = { name: "", age: "", email: "" };
    this.setState(newState);
    this.props.history.push("/");
  };

  render() {
    if (!this.props.friend) {
      return <div>Loading friend...</div>;
    }

    return (
      <div className="outer-wrapper">
        <div className="friend-wrapper">
          <h3>
            <strong>{this.props.friend.name}</strong>
          </h3>
          <p>{this.props.friend.age}</p>
          <p>{this.props.friend.email}</p>
          <div className="buttons-container">
            <button onClick={() => this.deleteFriend()}>{`Delete ${
              this.props.friend.name
            }`}</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    friend: dispatch.friendReducer.friend
  };
};

export default connect(
  mapDispatchToProps,
  { getFriend, deleteFriend }
)(Friend);
