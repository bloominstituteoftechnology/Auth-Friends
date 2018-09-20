import React from "react";
import { connect } from "react-redux";
import "../../containers/App/App.css";
import Form from "../Form";
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
    this.props.history.push('/');
  };

  render() {
    if (!this.props.friend) {
      return <div>Loading friend...</div>;
    }

    return (
      <div className="friend-page">
        <h3>{this.props.friend.name}</h3>
        <h3>{this.props.friend.age}</h3>
        <h3>{this.props.friend.email}</h3>
        <div className="buttons-container">
          <button onClick={() => this.deleteFriend()}>{`Delete ${
            this.props.friend.name
          }`}</button>
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
