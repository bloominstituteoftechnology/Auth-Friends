import React from "react";
import { fetchSingleFriend } from "../actions";
import { connect } from "react-redux";

class Friend extends React.Component {
  componentWillMount() {
    this.props.fetchSingleFriend(this.props.thisFriend.id);
  }

  render() {
    const { friends, erase, toggle, pick, thisFriend } = this.props;
    let friend = friends.filter(friend => friend.id === thisFriend.id)[0];

    return (
      <div key={friend.id}>
        <span onClick={() => pick({})}>X</span>
        <h2>{friend.name}</h2>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button onClick={() => toggle()}>Update {friend.name}</button>
        <button onClick={() => erase()}>Delete {friend.name}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { soloReducer } = state;
  return {
    thisFriend: soloReducer.thisFriend,
    error: soloReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSingleFriend }
)(Friend);
