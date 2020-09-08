import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendList from './FriendList'

class FriendForm extends React.Component {

    constructor() {
        super();
        this.state = {
            friends: {
                name: "",
                age: "",
                email: "",
            },
            post: []
        }
    }
  
    handleChange = event => {
        this.setState({
            friends: {
                ...this.state.friends,
                [event.target.name]: event.target.value
            }
        })
    }


    newFriend = event => {
        event.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/friends",this.state.friends)
        .then((res) => {
            this.setState({
                post:res.data
            })
            console.log("newFriend API Working", res) 
                
         })
         .catch((err) => {console.log("get error", err)})
    }

    render() {
        return (
            <div>
                <h1>Add A Friend</h1>
                <form onSubmit={this.newFriend}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.friends.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={this.state.friends.age}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.friends.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                    />
                </form>
            </div>
        )
    }
}


export default FriendForm