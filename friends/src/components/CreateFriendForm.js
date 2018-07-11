import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import { Button, Input } from 'reactstrap';

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age: '',
            food: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addFriend = () => {
        const { name, email, age, food } = this.state;
        const friend = { name, email, age, food }

        if (name === '' || email === '' || age === '' || food === '') return;

        this.props.addFriend(friend);
        this.setState({ name: '', email: '', age: '', food: '' });
    }

    render() {
        return (
            <form className='add-form' onSubmit={event => event.preventDefault()}>
                <Input className='add-field' onChange={this.handleInput} value={this.state.name} type='text' name='name' placeholder='Name' />
                <Input className='add-field' onChange={this.handleInput} value={this.state.email} type='text' name='email' placeholder='Email' />
                <Input className='add-field' onChange={this.handleInput} value={this.state.age} type='text' name='age' placeholder='Age' />
                <Input className='add-field' onChange={this.handleInput} value={this.state.food} type='text' name='food' placeholder='Food' />
                <Button className='add-button' color='info' type='submit' onClick={this.addFriend}>Add Friend</Button>
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