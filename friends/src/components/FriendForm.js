import React from 'react';


class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0, 
            email: "", 
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addNewFriend(this.state);
        this.setState({
            name: "",
            age: 0, 
            email: "", 
        })
    }
    
    render() {
        return (
            <div className="form">
            <form onSubmit={this.submitHandler}> 
                <h2>Add a friend!</h2>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="Name"
                    onChange={this.changeHandler}
                />
                <input
                    type="number"
                    name="age"
                    value={this.state.age}
                    placeholder="Age"
                    onChange={this.changeHandler}
                />
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.changeHandler}
                />
                <button>Add Friend</button>
            </form>
            </div>
        )
    }
}

export default FriendForm;