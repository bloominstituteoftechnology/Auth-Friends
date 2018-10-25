import React, { Component } from 'react';
import { connect } from "react-redux";
import { add } from '../actions';

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:5000/friends'
        this.state = {
            id: null,
            name: '',
            age: '',
            email: '',
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    addFriend = event => {
        event.preventDefault();
        const { name, age, email } = this.state;
        let newFriend = {name, age, email}
        this.props.add(newFriend)
        this.setState(() => ({
            name: '',
            age: '',
            email: ''
        }))
    }

    // editFriend = (id, name, age, email) => {    
    //     this.setState(() => ({
    //         id: id,
    //         age: age,
    //         name: name,
    //         email: email
    //     }))
    // }

    // editSubmit = event => {
    //     event.preventDefault();
    //     let id = Number(event.target.id)
    //     const { id, name, age, email } = this.state;
    //     let editedFriend = {id, name, age, email}

        // if(editedFriend) {
        //     friends.map(friend => {
        //         if (friend.id === id) {
        //             axios
        //             .put(`${this.url}/${id}`, editedFriend)
        //             .then(response => {
        //                 this.setState({ friends: response.data})
        //             })
        //             .catch(error => {
        //                 alert('Error: we\'re sorry, your friend could not updated', error);
        //             })
        //         }
        //     })
        //     this.setState(() => ({
        //         name: '',
        //         age: '',
        //         email: '',
        //     }))
        // }

    render() {
        return (
            <div className='friend-form'>
                <form className='form' onSubmit={this.addFriend}>Add Friend
                    <input name='name' value={this.state.name} onChange={this.changeHandler} type='text' placeholder='Name' required></input>
                    <input name='age' value={this.state.age} onChange={this.changeHandler} type='text' placeholder='Age' required></input>
                    <input name='email' value={this.state.email} onChange={this.changeHandler} type='text' placeholder='Email' required></input>
                    <input className='submit' type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        friends: state.friends,
    };
};

export default connect(mapStateToProps, { add })(FriendForm);
