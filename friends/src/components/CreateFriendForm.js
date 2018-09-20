import React from 'react';
import { addFriend } from '../actions';

class CreateFriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };
        
        this.setState({
            name: '',
            age: '',
            email: ''
        });

        this.props.addFriend(newFriend);
    }

    render() {
        return (
            <div className="newFriendForm">
                <input
                    type="text" 
                    placeholder="Enter name" 
                    name="name" 
                    value = {this.state.name}
                    onChange={this.handleInputChange}
                    required
                />

                <input 
                    type="number" 
                    placeholder="Enter age" 
                    name="age" 
                    value = {this.state.age}
                    onChange={this.handleInputChange}
                    required
                />

                <input 
                    type="email" 
                    placeholder="Enter email" 
                    name="email" 
                    value = {this.state.email}
                    onChange={this.handleInputChange}
                    required
                />

                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default CreateFriendForm;