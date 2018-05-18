import React, { Component } from 'react';
import axios from 'axios';

class CreateFriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: '',
            email: ''
         }
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addFriend = () => {
        
        const newFriend = { 
            name: this.state.name, 
            age: this.state.age, 
            email: this.state.email
        };

        axios
            .post(`http://localhost:5000/api/friends`, newFriend)
            .then(newFriend => {
                this.setState({
                    name: '',
                    age: '',
                    email: ''
                })
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }
    
    render() { 
        return ( 
            <div className="form-container">
                <form className='friend-form'>
                    <input type="text" onChange={this.handleInput} name='name' value={this.state.name} placeholder="Name"/>
                    <input type="number" onChange={this.handleInput} name='age' value={this.state.age} placeholder="Age"/>
                    <input type="text" onChange={this.handleInput} name='email' value={this.state.email} placeholder="Email"/>
                    <button onClick={this.addFriend} >Add Friend</button>
                </form>
            </div>
         )
    }
}
 
export default CreateFriendForm;