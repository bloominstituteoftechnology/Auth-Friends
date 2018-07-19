import React, { Component } from 'react';
import { addNewFriend} from '../actions/index';
import { connect } from 'react-redux';

class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    updateInputState = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitNewFriend = e => {
        e.preventDefault();
        const friend = {
            id: Math.random(),
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.addNewFriend(friend);
        this.setState({ name: '', age: '', email: '' });
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        onChange={this.updateInputState}
                        type='text'
                        placeholder='name'
                        name='name'
                        value={this.state.name}
                    />
                    <input 
                        onChange={this.updateInputState}
                        type='number'
                        placeholder='age'
                        name='age'
                        value={this.state.age}
                    />
                    <input 
                        onChange={this.updateInputState}
                        type='text'
                        placeholder='email'
                        name='email'
                        value={this.state.email}
                    />
                    <button onSubmit={this.submitNewFriend}>Add New Friend</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state,
    }
}

export default connect(mapStateToProps, { addNewFriend })(CreateFriendForm);

