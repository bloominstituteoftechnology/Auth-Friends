import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewFriend } from '../actions';

class FriendForm extends Component {
    state = { 
        name: '',
        age: '',
        email: ''
     }
     handleChange = e => {
         this.setState({ [e.target.name]: e.target.value })
     }

     handleSubmit = e => {
         const newFriend = {
             name: this.state.name,
             age: this.state.age,
             email: this.state.email
         }
         this.props.createNewFriend(newFriend);
         this.setState({ name: '', age: '', email: ''})
     }

    render() { 
        return (  
            <form className='form'>
                <input value={this.state.name} type='text' name='name' placeholder='Name' onChange={this.handleChange} />
                <input value={this.state.age} type='number' name='age' placeholder='Age' onChange={this.handleChange} />
                <input value={this.state.email} type='text' name='email' placeholder='Email' onChange={this.handleChange} />
                <button onClick ={() => this.handleSubmit()}>Submit</button>
            </form>
            
        );
    }
}
 
const mapStateToProps = state => {
    return {
        createNewFriend: state.createNewFriend
    }
}
export default connect(mapStateToProps, { createNewFriend }) (FriendForm);