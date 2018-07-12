import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchingData } from "../actions/index";
import { updatingFriend } from "../actions/index";

class UpdateFriend extends Component {
    handleSubmitFriend = e => {
        this.setState({ [e.target.name]: e.target.value });
        return e.target.value;
      };

    render() { 
        return ( 
            <div className="addForm">
            <div>
              <h3>Update Friend</h3>
              <input
                className="input"
                type="text"
                onChange={this.handleSubmitFriend}
                placeholder="Name"
                name="name"
              />
              <input
                className="input"
                type="text"
                onChange={this.handleSubmitFriend}
                placeholder="Age"
                name="age"
              />
              <input
                className="input"
                type="text"
                onChange={this.handleSubmitFriend}
                placeholder="Email"
                name="email"
              />
            </div>
            <button
            //   onClick={() =>
            //     this.props.updatingFriend({
            //       name: this.state.name,
            //       age: this.state.age,
            //       email: this.state.email
            //     })
            //   }
            >
              Update
            </button>
          </div>
         );
    }
}

const mapStateToProps = state => {
    return {
      friends: state.friends,
      updatingFriend: state.updatingFriend
    };
  };
 
export default connect(
    mapStateToProps,
    { fetchingData }
  )(UpdateFriend);
  