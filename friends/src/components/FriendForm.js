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

    render() {
        return (
            <form>
                <input
                    name="nameText"
                    type="text"
                    placeholder="Name"
                    required
                />
                <input
                    name="ageText"
                    type="number"
                    placeholder="Age"
                    required
                />
                <input
                    name="emailText"
                    type="text"
                    placeholder="Email"
                    required
                />
                <button type="submit">Add Friend</button>
            </form>
        );
    }
}

export default FriendForm;