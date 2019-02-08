import React from 'react';

import { addFriend } from '../actions/actions';

import { connect } from 'react-redux';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: "",
                age: "",
                email: ""
            }
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    }

    addFriend = () => {
        this.props.addFriend(this.state.friend)
    }

    render() {
        console.log(this.state)
    return (
    <div className="form">
         
            <h4>Add more friends to your list:</h4>
            <input 
                type="text"
                placeholder="First Name" 
                name="name"
                onChange={this.handleChange}
                value={this.state.friend.name}
                />
            <input 
                type="text" 
                name="age"
                placeholder="Age" 
                name="age"
                onChange={this.handleChange}
                value={this.state.friend.age}
                />
            <input 
                type="email"
                name="email" 
                placeholder="Email Address" 
                name="email" 
                onChange={this.handleChange}
                value={this.state.friend.email}
                />
            <button onClick={() => this.addFriend()}>Add</button>
        
    </div>
    )
    }
}

export default connect(null, { addFriend } )(FriendForm)