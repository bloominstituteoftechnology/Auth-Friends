import React from 'react';

class AddFriendForm extends React.Component {
    constructor() {
        super();
        this.state={
            newFriend: {
                name:'',
                age:'',
                email: ''
            }
        }
    }

    render () {
return (
    <div>
    <form className="add-friend-form">
    <input 
    type="text"
    placeholder="Name"
    value={this.state.newFriend.name}
    name="name"
    />
    <input 
    type="text"
    placeholder="Age"
    value={this.state.newFriend.age}
    name="age"
    />
    <input 
    type="text"
    placeholder="Email"
    value={this.state.newFriend.email}
    name="email"
    />
    <button type="submit">Add new friend</button>
    </form>
    </div>
)
    }
}

export default AddFriendForm;