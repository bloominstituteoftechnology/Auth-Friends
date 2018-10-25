import React, { Component } from "react";

class UpdateSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSmurf: {
        name: this.props.updateSmurf.name,
        age: this.props.updateSmurf.age,
        height: this.props.updateSmurf.height,
        id: this.props.updateSmurf.id
      }
    };
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  onInputChange = e => {
    e.preventDefault();

    this.setState({
      updateSmurf: {
        ...this.state.updateSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  submitUpdate = () => {
    console.log(this.state.updateSmurf);
    debugger;
    this.props.submitUpdate(this.state.updateSmurf);
    this.setState({
      updateSmurf: {
        name: "",
        age: null,
        height: null
      }
    });
  };

  render() {
    return (
      <div className="updateSmurf">
        <form className="update-smurf-form">
          <label>
            <input
              type="text"
              onChange={this.onInputChange}
              name="name"
              value={this.state.updateSmurf.name}
              placeholder={this.props.updateSmurf.name}
            />
          </label>

          <label>
            <input
              type="number"
              onChange={this.onInputChange}
              name="height"
              value={this.state.updateSmurf.height}
              placeholder={this.props.updateSmurf.height}
            />
            tall
          </label>

          <label>
            <input
              type="number"
              onChange={this.onInputChange}
              name="age"
              value={this.state.updateSmurf.age}
              placeholder={this.props.updateSmurf.age}
            />
            smurf years old
          </label>

          <button onClick={this.submitUpdate}>Update</button>
        </form>
      </div>
    );
  }
}

export default UpdateSmurfForm;
