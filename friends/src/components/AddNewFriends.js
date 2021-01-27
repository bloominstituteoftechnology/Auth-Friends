import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddNewFriends extends React.Component {
    state = {
        friend: {
            id: '',
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = (e) => {
        this.setState({
            friend: {
                ...this.state.friend,
                id:Date.now(),
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="add-new-container">
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <h1>Add new Friends here!</h1>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.friend.name}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={this.state.friend.age}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.friend.email}
                    onChange={this.handleChange}
                    />
                    <button onCLick={() => window.location.reload()} >Add a new Friend!</button>
                </form>
            </div>
        )
    }
}
export default AddNewFriends;
