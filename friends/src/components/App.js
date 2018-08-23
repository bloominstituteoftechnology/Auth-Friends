import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { connect } from "react-redux";

import { getTheData, postTheData } from "../actions";

class App extends Component {
  state = {
    name: ''
  };
  componentDidMount() {
    this.props.getTheData();
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
   this.props.postTheData({ name: this.state.name }) 
   this.setState({name: ''})
  }
  render() {
    return (
      <div className="App">
        {this.props.pending ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
          <input
          type="text"
          placeholder="friend name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add friend</button>
          <ul>
            {this.props.friends.map(friend => {
              return <div key={friend.id}>{friend.name}</div>;
            })}
          </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pending: state.pending,
    friends: state.friends,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { getTheData, postTheData }
)(App);
