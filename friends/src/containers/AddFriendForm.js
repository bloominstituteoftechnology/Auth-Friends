import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addFriend} from '../actions/index';

class AddFriendForm extends React.Component {
    
    constructor(props){
        
        super(props);

        this.state = {
            input: '',
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount(){
        console.log(this.state);
    }

    handleInput(event){
        event.preventDefault();
        let newInput = event.target.value;
        if(event.target.name === 'input-name'){
            this.setState( { 
                name: newInput
            })
        }

        if(event.target.name === 'input-age'){
            this.setState({
                age: newInput
            })
        }

        if(event.target.name === 'input-email'){
            this.setState({
                email: newInput
            })
        }

        
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addFriend(this.state.input);
        this.setState({
            input: '',
            name: '',
            age: '',
            email: '',
        })
    }
    render(){

    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            
            <input type = 'text' placeholder='Name' name='input-name' onChange={this.handleInput.bind(this)} value={this.state.name}></input>
            <input type = 'number' placeholder='Age' name='input-age' onChange={this.handleInput.bind(this)} value={this.state.age}></input>
            <input type = 'email' placeholder='Email' name='input-email' onChange={this.handleInput.bind(this)} value={this.state.email}></input>
            <button type = 'submit'>Add Friend</button>
            
            </form>
        </div>
    )
}
}

export default AddFriendForm;