import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addFriend = () => {
        const { name, email, age } = this.state;
        const friend = { name, email, age }

        if (name === '' || email === '' || age === '') return;

        this.props.addFriend(friend);
        this.setState({ name: '', email: '', age: '' });
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input onChange={this.handleInput} value={this.state.name} type='text' name='name' placeholder='name' />
                <input onChange={this.handleInput} value={this.state.email} type='text' name='email' placeholder='email' />
                <input onChange={this.handleInput} value={this.state.age} type='text' name='age' placeholder='age' />
                <button onClick={this.addFriend}>Add Friend</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect(mapStateToProps, { addFriend })(CreateFriendForm);