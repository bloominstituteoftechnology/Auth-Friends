import React, { Component } from 'react'


class CreateFriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }

    handleNewFriend = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmitFriend = (e) => {
        let newFriend = {
            name: this.state.name,
            age: this.state.age, 
            email: this.state.email
        }

        this.props.createFriend(newFriend);
        this.setState({name: "", age: "", email: ""})
    }



    render() {
        return [
            <form>
                <input type= "text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleNewFriend}></input>,
                <input type= "text" placeholder="Age" value={this.state.age} name="age" onChange={this.handleNewFriend}></input>,
                <input type= "text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleNewFriend}></input>,
                <button onClick={this.handleSubmitFriend}>Add Friend</button> 
            </form>
        ]
    }
}



export default CreateFriendForm;