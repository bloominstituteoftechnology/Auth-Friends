import React, { Component } from "react";
import { connect } from "react-redux";
import { createFriend } from "../actions";

class FriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }
    handleInputChange = event => {
        this.setState({ [event.target.name] : [event.target.value] });
    }

    handleAddFriend = _ => {
        const { name, age, email } = this.state;
        this.props.createFriend({ name, age, email });
        this.setState({ name: '', age: '', email: ''});
    }

    render() {
        return (
            <form className='Column-Layout'>
                <input 
                className='input'
                value={this.state.name}
                name='name'
                type='text'
                placeholder='Enter your name'
                onChange={this.handleInputChange}
                />
                <input 
                className='input'
                value={this.state.age}
                name='age'
                type='text'
                placeholder='Enter your Age'
                onChange={this.handleInputChange}
                />
                <input 
                className='input'
                value={this.state.name}
                name='email'
                type='text'
                placeholder='Enter your email'
                onChange={this.handleInputChange}
                />
                <button onClick={() => this.handleAddFriend()} type='button'> 
                    Add a Friend
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingFriend: state.creatingFriend
    }
}


export default connect(mapStateToProps, { createFriend})(FriendForm);