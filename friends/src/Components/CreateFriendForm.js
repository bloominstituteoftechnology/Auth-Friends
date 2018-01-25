import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFriend } from '../Actions';

class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    addFriend = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});

    }

    submitFriend = (event) => {
        event.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.postFriend(friend);
        console.log(friend);
        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }

    render() {
        return (
            <form>
                <input name="name" placeholder="name" value={this.state.name} onChange={this.addFriend} />
                <input name="age" placeholder="age" value={this.state.age} onChange={this.addFriend} />
                <input name="email" placeholder="email" value={this.state.email} onChange={this.addFriend} />
                <button onClick={this.submitFriend}>Add Friend</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps,{ postFriend })(CreateFriendForm);