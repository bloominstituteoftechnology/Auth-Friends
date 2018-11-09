import React from 'react';
import './index.css';
import { deletefriend, updatefriend } from './Actions'
import { connect } from "react-redux";
class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateSubmit = (event) => {
    event.preventDefault();
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    const id = this.props.id;
    this.props.updatefriend(id, friend);
    event.target.reset();

  }

  render() {
    return (

      <div className="friend">
        <div>
          <h3>{this.props.name}</h3>
          <p>{this.props.age}years old</p>
          <p>{this.props.email}</p>
          <button onClick={() => this.props.deletefriend(this.props.id)}>Delete Friend</button>
        </div>
        <div className='update'>
          <form onSubmit={this.handleUpdateSubmit}>
            <input
              onChange={this.handleInputChange}
              name="name"
              placeholder="name"
            />
            <input
              onChange={this.handleInputChange}
              name="age"
              placeholder="age"
            />
            <input
              onChange={this.handleInputChange}
              name="email"
              placeholder="email"
            />
            <button type="submit">Update Friend</button>
          </form>
        </div>
      </div>

    );
  }
};

const mapStateToProps = state => {
    return {};
};

export default connect(
  mapStateToProps,
  {
    deletefriend, updatefriend
  }
)(Friend);



