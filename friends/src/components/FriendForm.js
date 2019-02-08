import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }
    addFriendHandler = e => {
        e.preventDefault();
        console.log(this.props);
        this.props.addFriend(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
        console.log(this.state)
    }


    changeHandler = e => {
        // e.preventDefault();
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value,
                [e.target.age]: e.target.value,
                [e.target.email]: e.target.value
            }
        })
    }
    render() {
        return(
            <div>

                {/* {} */}
                <form onSubmit={this.addFriendHandler}>
                    <input  
                        onChange={this.changeHandler}
                        type="text"
                        name="name"
                        value={this.state.friend.name}
                        placeholder="name"
                    />
                    <br></br>
                    <input
                        onChange={this.changeHandler}
                        type="text"
                        name="age"
                        value={this.state.friend.age}
                        placeholder="age"
                    />
                    <br></br>
                    <input
                        onChange={this.changeHandler}
                        type="email"
                        name="email"
                        value={this.state.friend.email}
                        placeholder="email"
                    />
                    <br></br>
                    <button type="submit">Add</button>
                    {/* { this.addFriendHandler ? 
                        <div>{this.props.savingFriends}</div>
                    } */}
                </form>
            </div>
        )
    }
}

export default connect(null, 
    {addFriend}
    ,)
    (FriendForm);