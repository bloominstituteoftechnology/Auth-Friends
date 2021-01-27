import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsAdd extends React.Component {
    state = {
        friends: []
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleFriendAdd = () => {
        const { name, age, email } = this.state;

        this.setState({
            name: '',
            age: '',
            email: ''
        });
        axiosWithAuth()
            .post("api/friends", {
                id: this.state.id,
                name: this.state.name,
                age: this.state.age,
                email: this.state.email

            })
            .then((res) => {
                console.log(res.data)
                this.setState({
                    friends: res.data
                });
            })
    }

    render() {
        return (
            <>
                <form className="form">
                    <input
                        className="input"
                        value={this.state.name}
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={this.handleInputChange}
                    />
                    <input
                        className="input"
                        value={this.state.age}
                        name="age"
                        type="text"
                        placeholder="Age"
                        onChange={this.handleInputChange}
                    />
                    <input
                        className="input"
                        value={this.state.email}
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={this.handleInputChange}
                    />
                    <button onClick={() => this.handleFriendAdd()} type="button">
                        Add New Friend
        </button>
                </form>
                <div className='friendList'> Friends
                {this.state.friends.map(item => (
                    <div key={item.id} >
                        <p> Name: 💗 {item.name} </p>
                        <p> Age: {item.age} </p>
                        <p> Email: {item.email} </p>
                    </div>
                ))}
                </div>
            </>
        );
    }
}



export default FriendsAdd;