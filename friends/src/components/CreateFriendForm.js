import React, { Component } from 'react';

class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            newFriend: '',
        }
    }
        render(){
            return (
            <div>    
                <input placeholder="Enter your name" /> <br />
                <input placeholder="Enter your age" /> <br />
                <input placeholder="Enter your email"/> <br />
                <button> Add Friend </button>
            </div>    
            )
        }
}

export default CreateFriendForm;

