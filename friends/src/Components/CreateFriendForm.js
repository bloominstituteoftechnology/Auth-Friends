import React, { Component } from 'react';

class CreateFriendForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='name' />
                    <input type='number' placeholder='age' />
                    <input type='text' placeholder='email' />
                    <button>Add New Friend</button>
                </form>
            </div>
        )
    }
}

export default CreateFriendForm;

