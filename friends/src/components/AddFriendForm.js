import React from "react";
import { format } from "url";

export default class AddFriend {
  state = {
    nameInput: "",
    ageInput: 0,
    emailInput: ""
  };

  render() {
    return (
      <React.Fragment>
        <h2>Add Friend</h2>
        <form>
          <div>
            <h3>Name</h3>
            <input
              required
              type="text"
              name="name"
              value={this.state.nameInput}
            />
          </div>

          <div>
            <h3>Age</h3>
            <input
              required
              type="number"
              name="age"
              value={this.state.ageInput}
            />
          </div>

          <div>
            <h3>Email</h3>
            <input
              required
              type="email"
              name="email"
              value={this.state.emailInput}
            />
          </div>

          <button>Add Friend</button>
        </form>
      </React.Fragment>
    );
  }
}
