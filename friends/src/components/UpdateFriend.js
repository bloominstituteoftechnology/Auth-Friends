import React, { Component } from 'react'
import { connect } from 'react-redux'
 import { updateFriend } from '../actions/actions.js'

 class UpdateFriend extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: '',
            email: ''
        }
    }
     inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }
     submitHandler = (e) => {
        e.preventDefault();
        this.props.updateFriend(this.props.friend.id, this.state);
        this.setState({
            age: '',
            email: ''
        })
    }
     render(){
        return(
            <form onSubmit={this.submitHandler}>
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
                <button type='submit'>Update</button>
            </form>
        )
    }
}
 const mapStateToProps = () => ({});
 export default connect(mapStateToProps, { updateFriend })(UpdateFriend); 