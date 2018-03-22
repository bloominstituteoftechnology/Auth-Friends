import React, { Component } from 'react';
import './CreateFriendForm.css'
class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            newFriend: '',
        }
    }
        render(){
            return (
            <div className="divInputs">    
                <input placeholder="Enter name" /> <br />
                <input placeholder="Enter age" /> <br />
                <input placeholder="Enter email"/> <br />
                <button type="submit"> Add Friend </button>
            </div>    
            )
        }
}

export default CreateFriendForm;