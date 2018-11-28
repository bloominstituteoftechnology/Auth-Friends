import React, { Component } from 'react';
import { addFriend } from '../actions'
import { connect } from 'react-redux'

class FriendForm extends Component{
    constructor(){
        super();
        this.state ={
            name: '',
            age: '',
            email: ''
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    addFriend = (e) => {
        e.preventDefault();
        this.props.addFriend( this.state);
        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }
    
    render(){
        return(
            <form onSubmit={this.addFriend}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="email"
              value={this.state.email}
              name="email"
            />
            <button type="submit">Add Friend</button>
          </form> 
        )
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {addFriend})(FriendForm);