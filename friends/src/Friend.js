import React from 'react';
import './index.css';
import { deletefriend, updatefriend } from './Actions';
import { connect } from "react-redux";
import { Button} from 'reactstrap/lib';
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
        <div className="friendbox">
          <h3>{this.props.name}</h3>
          <p>{this.props.age} years old</p>
          <p>{this.props.email}</p>
          <Button color="danger"onClick={() => this.props.deletefriend(this.props.id)}>Delete Friend</Button>
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
            <Button outline color="primary" type="submit">Update Friend</Button>
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



