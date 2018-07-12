import React, { Component } from 'react';

class CreateFriendForm extends Component{
    render() {
    return(
        <div>
        <div>
        <input
            type="text"
            placeholder="Friend Name"
            className="input"
        />
        </div>
        <div>
        <input
            type="text"
            placeholder="Friend Age"
            className="input"
        />
        </div>
        <div>
        <input
            type="text"
            placeholder="Friend Email"
            className="input"
        />
        </div>
        <button className> Add Friend</button>
        </div>
    )
};
}

export default CreateFriendForm;