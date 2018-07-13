import React from "react";
import { getFriends, deleteFriend } from "../actions/action";
import { connect } from "react-redux";
import logo from "../logo.svg";

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      update: false
    };
  }
  componentDidMount() {
    this.props.getFriends("http://localhost:5000/api/friends/");
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          {this.props.friends.map(friend => {
            return (
              <div key={Math.random()}>
                {friend.name}
                <button onClick={() => this.props.deleteFriend(friend.id)}>
                  Delete
                </button>
                <button onClick={this.clickUpdate}>Update</button>
                {this.state.update ? (
                  <form>
                    <input placeholder="Edit Name" />
                    <input placeholder="Edit Age" />
                    <input placeholder="Edit Email" />
                    <button>Confirm Edit</button>
                  </form>
                ) : null}
              </div>
            );
          })}
        </div>
        <p>{this.props.error}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetchingFriends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFriends, deleteFriend }
)(Friends);
