import React from "react";
import { connect } from "react-redux";

import { addFriend } from "../actions";

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            nameText: "",
            ageText: "",
            emailText: ""
        };
    }

    typeHandler = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    submitHandler = ev => {
        ev.preventDefault();
        this.props.addFriend({
            name: this.state.nameText,
            age: Number(this.state.ageText),
            email: this.state.emailText
        });
        this.setState({
            nameText: "",
            ageText: "",
            emailText: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Add New Friend</h1>
                <input
                    name="nameText"
                    type="text"
                    placeholder="Name"
                    value={this.state.nameText}
                    onChange={this.typeHandler}
                    required
                />
                <input
                    name="ageText"
                    type="number"
                    placeholder="Age"
                    value={this.state.ageText}
                    onChange={this.typeHandler}
                    required
                />
                <input
                    name="emailText"
                    type="text"
                    placeholder="Email"
                    value={this.state.emailText}
                    onChange={this.typeHandler}
                    required
                />
                <button type="submit">Add Friend</button>
            </form>
        );
    }
}

export default connect(
    null,
    {
        addFriend
    }
)(FriendForm);