import React from 'react';
import { connect } from 'react-redux';
import { editFriend } from '../actions';
import { Button, Input } from 'reactstrap';
class UpdateFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            email: this.props.email,
            age: this.props.age,
            id: this.props.id
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    editFriend = () => {
        const { name, email, age, id } = this.state;
        const friend = { name, email, age, id }

        this.props.setEdit();
        if (name === '' || email === '' || age === '') return;

        this.props.editFriend(friend);
    }

    render() {
        return (
            <form className='edit-form' onSubmit={event => event.preventDefault()} >
                <Input className='edit-field' onChange={this.handleInput} value={this.state.name} type='text' name='name' placeholder='name' />
                <Input className='edit-field' onChange={this.handleInput} value={this.state.email} type='text' name='email' placeholder='email' />
                <Input className='edit-field' onChange={this.handleInput} value={this.state.age} type='text' name='age' placeholder='age' />
                <Button color='primary' type='submit' className='save-button' onClick={this.editFriend}>Save</Button>
            </form >
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect(mapStateToProps, { editFriend })(UpdateFriendForm);