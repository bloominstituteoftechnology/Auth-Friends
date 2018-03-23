import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import { updateFriend } from '../actions';
import { getFriend } from '../actions';
import './FriendForm.css';

class FriendForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            id: 1,
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleAdd = (event) => {
        event.preventDefault();
        let { name, age, email } = this.state;
        age = parseInt(age, 10);
        this.props.addFriend(name, age, email);
        this.setState({
            name: '',
            age: '',
            email: ''
        });
    }

    handleSelect = (event) => {
      event.preventDefault();
      this.props.getFriend(this.state.id);
      setTimeout(() => {
        this.setState({
        name: this.props.friend.name,
        age: this.props.friend.age,
        email: this.props.friend.email,
      });
    }, 100);
  }

    handleUpdate = (event) => {
        event.preventDefault();
        let { name, age, email, id} = this.state;
        age = parseInt(age, 10);
        this.props.updateFriend(name, age, email, id);
        this.setState({
            name: '',
            age: '',
            email: '',
            id: 1
        });
      }

        render(){
            return (
            <div classname="formContainer">
                <form>
                  <input onChange={this.handleInput} type='text' name='name' value={this.state.name} placeholder='Enter your name' /> <br />
                  <input onChange={this.handleInput} type='number'name='age' value={this.state.age} placeholder="Enter your age" /> <br />
                  <input onChange={this.handleInput} type='email' name='email' value={this.state.email} placeholder="Enter your email"/> <br />
                  <input onChange={this.handleInput} type='number' name='id' value={this.state.id} placeholder='Enter ID' />
                  <br />
                  <div className="buttonContainer">
                    <button onClick={this.handleAdd}>Add Friend</button>
                    <button onClick={this.handleSelect}>Select Friend</button>
                    <button onClick={this.handleUpdate}>Update Friend</button>
                  </div>
              </form>
            </div>
            )
        }
}


const mapStateToProps = (state) => {
    return {
      friends: state.friends,
      friend: state.friend,
    };
  };

  export default connect(mapStateToProps, { getFriend, updateFriend, addFriend })(FriendForm);
