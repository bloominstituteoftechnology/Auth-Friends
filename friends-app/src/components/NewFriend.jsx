import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class NewFriend extends React.Component {
    constructor() {
        super()
        this.state = {
            newFriend: {
                name: "",
                age: "",
                email: "",
            }
        }
    }


    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends", this.state.newFriend)
            .then(res => this.props.updateFriends(res.data))
            .catch(err => console.log(err));
        
    }

    render() {
        return(
            <div className="new-friend-form">
                <h2>New Friend:</h2>
                <form onSubmit={this.addFriend}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.newFriend.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Age:
                        <input
                            type="text"
                            name="age"
                            value={this.state.newFriend.age}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={this.state.newFriend.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default NewFriend