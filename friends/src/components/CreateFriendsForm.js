import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFriends } from '../actionCreators/createFriends';

class FriendForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

handleFormChange = event => {
    this.setState({[event.target.name]:event.target.value});
  }

submitFormChange = () => {
  const info = this.state;
  this.props.createFriends(info);
  this.setState({name: '', age: '', email: ''});
  }

  render() {
    return (
      <div>
        <form>
          <p> Name: <br/>
            <input 
            name='name' 
            value = {this.state.name} 
            onChange = {this.handleFormChange}
            />
          </p>

          <p> Age: <br/>
            <input 
            name='age' 
            value = {this.state.age} 
            onChange = {this.handleFormChange}
            />
          </p>

          <p> Email: <br/>
            <input 
            name='email' 
            value = {this.state.email} 
            onChange = {this.handleFormChange}
            />
          </p>

          <button onClick={this.submitFormChange}>Save</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createFriends })(FriendForm);