import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addFriend} from '../actions'

class AddFriend extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleInputChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = e =>{
        e.preventDefault();        

        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };

        this.props.addFriend(newFriend);
        this.setState({ name: '',  age: '', email: '' })
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit} className="add">
                <div>
                    <span>Name:</span>
                    <input onChange = {this.handleInputChange} value = {this.state.name} name = 'name' />
                    <span>Age:</span>
                    <input onChange = {this.handleInputChange} value = {this.state.age} name = 'age' />
                    <span>Email:</span>
                    <input onChange = {this.handleInputChange} value = {this.state.email} name = 'email' /> 
                </div>
                
                <div>
                    <button>Add Friend</button>
                </div>
            
            </form> 
        )
    }
}



export default connect(null,{addFriend})(AddFriend)