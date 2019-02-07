import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: {
                name: '',
                age: null,
                email: ''
            }
        }
    }
    changeHandler = e => {
        e.preventDefault();
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
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="name"
                        onChange={this.changeHandler}
                    />
                    <br></br>
                    <input
                        type="text"
                        name="age"
                        value={this.state.age}
                        placeholder="age"
                        onChange={this.changeHandler}
                    />
                    <br></br>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="email"
                        onChange={this.changeHandler}
                    />
                    <br></br>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default FriendForm;