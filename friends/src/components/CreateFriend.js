import React, { Component } from 'react';
import axios from 'axios';

class CreateFriend extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: '',
            email: ''
         }
    }

    handleFriendInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    saveNewFriend = () => {
        const newFriend = { name: this.state.name, age: this.state.age, email: this.state.email};
        axios.post(`http://localhost:5000/api/friends`, newFriend)
        .then(savedFriend => {
            this.setState({
                name: '',
                age: '',
                email: ''
            })
            console.log('Saved Friend', savedFriend);//Doesn't actually log in console
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() { 
        return ( 
            <div className="form-container">
                <form className='friend-form'>
                    <input 
                        type="text" 
                        onChange={this.handleFriendInput} 
                        name='name' 
                        value={this.state.name} 
                        placeholder="First Name" 
                    />
                    <input 
                        type="number" 
                        onChange={this.handleFriendInput} 
                        name='age' 
                        value={this.state.age} 
                        placeholder="Your Age" 
                    />
                    <input 
                        type="email" 
                        onChange={this.handleFriendInput} 
                        name='email' 
                        value={this.state.email} 
                        placeholder="Your Email" 
                    />
                    <button onClick={this.saveNewFriend} >Save Friend</button>
                </form>
            </div>
         )
    }
}
 
export default CreateFriend;