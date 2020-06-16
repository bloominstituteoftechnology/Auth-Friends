import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class AddFriend extends React.Component {
    constructor() {
        super();
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: '',
                id: Date.now()
            }
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('api/friends', this.state.newFriend)
        .then(res => {
            console.log(res.data);
            this.setState({friends:[...res.data, res.data.payload]});
            this.props.getFriends()
        })
        .catch(err => console.log(err));
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' name='name' placeholder='Name' value={this.state.newFriend.name} />
                    <input onChange={this.handleChange} type='text' name='age' placeholder='Age' value={this.state.newFriend.age}/>
                    <input onChange={this.handleChange} type='text' name='email' placeholder='Email'value={this.state.newFriend.email} />
                    <button >Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;