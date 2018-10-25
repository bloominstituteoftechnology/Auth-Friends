import React from 'react';
import {connect} from 'react-redux';
import FriendsList from './FriendsList';

class FriendsForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
}

addFriend = event => {
    event.preventDefault();
    this.setState({ friends: this.state })
}

addFriendsHandler = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
        name: '',
        age: '',
        email: ''
    })
}

render() {
    return (
        <div>
            <form onSubmit ={this.addFriendsHandler}>
            <h1>Friends List</h1>
            <FriendsList friends={this.state.friends}/>

            <input
            type = "text"
            name = "name"
            onChange = {this.changeHandler}
            placeholder = "friend name"
            value = {this.state.name} />

            <input
            type = "text"
            name = "age"
            onChange = {this.changeHandler}
            placeholder = "age"
            value = {this.state.age} />

            <input
            type = "text"
            name = "email"
            onChange = {this.changeHandler}
            placeholder = "email"
            value = {this.state.email} />

            <button onClick = {this.addFriend} type="submit">Add Friend</button>

            </form>
        </div>
    )
}
}

export default FriendsForm;