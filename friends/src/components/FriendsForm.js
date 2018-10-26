import React from 'react';
import createFriend from '../actions/index';
import { connect } from 'net';

class FriendsForm extends React.Component {
    state = {
        name: '',
        age: '',
        email: ''
    };

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
};

newFriendHandler = event => {
    event.preventDefault();
    let { name, age, email } = this.state;
    this.props.createFriend({ name, age, email });
    this.setState({ name: '', age: '', email: '' });
};

render() {
    return (
        <form onSubmit={this.newFriendHandler}>
            <input
                type='text'
                value={this.state.name}
                name='name'
                placeholder='friend name'
                onChange={this.changeHandler}
            />
            <input
            type='text'
            value={this.state.age}
            name='age'
            placeholder='age'
            onChange={this.changeHandler}
            />
            <input
            type='text'
            value={this.state.email}
            name='email'
            placeholder='friend email'
            onChange={this.changeHandler}
            />
            <button onClick={this.newFriendHandler}>Add Friend</button>
        </form>
    )
}
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingFriend: state.creatingFriend
    };
};

export default 
// connect(mapStateToProps, { createFriend })
(FriendsForm);
