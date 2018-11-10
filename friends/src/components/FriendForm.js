import React from 'react';
import { connect } from 'react-redux';

import { createFriend } from '../actions';

class FriendForm extends React.Component {
    state = {
        name: '',
        age: '',
        emai: ''
    }

    inputHandler = e => {
      this.setState({[e.target.name]: e.target.value});
    }
  
    submitHandler = e => {
      e.preventDefault();
      this.props.createFriend(this.state);
      this.setState({name:'',age:'',email:''});
    }

    render() {
        return (
            <form className="friend-form" onSubmit={this.submitHandler}>
                <input
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.inputHandler} 
                    placeholder="Name"/>
                <input 
                    type="text" 
                    name="age" 
                    value={this.state.age} 
                    onChange={this.inputHandler} 
                    placeholder="Age"/>
                <input 
                    type="text" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.inputHandler} 
                    placeholder="Email"/>
                <button type="submit">Create</button>
            </form>
        )
    }
}
  
export default connect(() => {}, { createFriend })(FriendForm);