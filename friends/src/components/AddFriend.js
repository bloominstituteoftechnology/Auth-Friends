import React, { Component } from 'react'
import { connect } from 'react-redux'
 import { addFriend } from '../actions/actions.js'
 class AddFriend extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }
     inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }
     submitHandler = (e) => {
        e.preventDefault();
        this.props.addFriend(this.state);
        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }
     render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input 
                    type='text' 
                    name='name' 
                    value={this.state.name} 
                    onChange={this.inputHandler}
                    placeholder='Name'
                />
                <input
                    type='text' 
                    name='age' 
                    value={this.state.age} 
                    onChange={this.inputHandler}
                    placeholder='Age'
                />
                <input
                    type='text' 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.inputHandler}
                    placeholder='Email'
                />
                <button type='submit'>Add</button>
            </form>
        )
    }
}
 const mapStateToProps = () => ({});
 export default connect(mapStateToProps, { addFriend })(AddFriend); 