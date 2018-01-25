import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions
import { updateFriend } from '../Actions';
// create update method
// use Friendform as template 
class UpdateFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data.name,
      age: this.props.data.age,
      email: this.props.data.email,
      save: false,
    };
  }

  //  create update/submit handlers
  
  handleUpdate = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitUpdate = event => {
    event.preventDefault();
    const update = {
      index: this.props.index,
      update: {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      },
    };
    let active = this.state.save;
    this.props.updateFriend(update);
    this.setState({ save: !active });

    console.log(update);
  };
  render() {
    return (
      <form style={this.state.save ? { display: 'none' } : null}>
        <input
          placholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleUpdate}
        />
        <input
          placholder="age"
          name="age"
          value={this.state.age}
          onChange={this.handleUpdate}
        />
        <input
          placholder="email"
          name="email"
          value={this.state.email}
          onChange={this.handleUpdate}
        />
        <button onClick={this.submitUpdate}>save</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendUpdated: state.friendUpdated,
  };
};

// connect components for update
export default connect(mapStateToProps, { updateFriend })(UpdateFriend);
