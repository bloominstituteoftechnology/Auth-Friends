import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFriend } from '../actions';

class updateFriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editFriend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    changeHandler = (event) => {
        this.setState({ newFriend: {
          ...this.state.newFriend,
          [event.target.name]: event.target.value
        } })
    }

    handleAdd = (event, newFriend) => {
        event.preventDefault();
        this.props.addFriend(newFriend);
        this.setState({ newFriend: {
            name: '',
            age: '',
            email: ''
        } })
    }

    render() {
        return (
        <div>
            <form onSubmit={event => this.handleAdd(event, this.state.newFriend)}>
            <input name="name" onChange={this.changeHandler} value={this.state.newFriend.name} type="text" placeholder="name" />
            <input name="age" onChange={this.changeHandler} value={this.state.newFriend.age} type="number" placeholder="age" />
            <input name="email" onChange={this.changeHandler} value={this.state.newFriend.email} type="text" placeholder="email" />
            <input onClick={event => this.handleAdd(event, this.state.newFriend)} value="Add" type="submit" />
            </form>
        </div>
        )
    }
}

export default connect(null, {
    addFriend
})(CreateFriendForm)