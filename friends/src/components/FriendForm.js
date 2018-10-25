import React from "react";

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

    render() {
        return (
            <form>
                <input
                    name="nameText"
                    type="text"
                    placeholder="Name"
                    value={this.state.nameText}
                    required
                />
                <input
                    name="ageText"
                    type="number"
                    placeholder="Age"
                    value={this.state.age}
                    required
                />
                <input
                    name="emailText"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    required
                />
                <button type="submit">Add Friend</button>
            </form>
        );
    }
}

export default FriendForm;