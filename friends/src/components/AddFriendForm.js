import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    }
    handleAddFriend = () => {
        this.props.addFriend(this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })        
    }
    render() {
        return (
        <div>
            <input name='name' placeholder='name' onChange={e => this.handleChange(e)}/>
            <input name='age' placeholder='age' onChange={e => this.handleChange(e)}/>
            <input name='email' placeholder='email' onChange={e => this.handleChange(e)}/>
            <button onClick={this.handleAddFriend}>Submit</button>
        </div>
        );
    }
}

export default connect(null,{ addFriend })(AddFriendForm);
