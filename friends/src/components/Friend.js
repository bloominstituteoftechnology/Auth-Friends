import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFriend, deleteFriend } from "../actions";

class Friend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            email: '',
            edit: false
        }
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const edit = this.state.edit;
        return (
            <div>{edit ? (
                <form>
                    <input onChange={this.handleInput} placeholder="name" value={this.state.name} name="name" />
                    <input onChange={this.handleInput} placeholder="age" value={this.state.age} name="age" />
                    <input onChange={this.handleInput} placeholder="email" value={this.state.email} name="email" />
                    <button onClick={() => this.props.addFriend(this.state)}>Add a friend</button>
                </form>
            ) : (
                <div>
                    <h3>{this.props.friend.name}</h3>
                    <p>{this.props.friend.age}</p>
                    <p>{this.props.friend.email}</p>
                </div>
            )}
            </div>
        );
    }
}


export default connect(null, { updateFriend, deleteFriend })(Friend);