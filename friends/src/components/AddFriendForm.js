import React from 'react';
import { withRouter } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";


class AddFriend extends React.Component {
    state = {
        friendData: {
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = e => {
        this.setState({
            friendData: {
                ...this.state.friendData,
                [e.target.name]: e.target.value
            }
        });
    };

    addFriend = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("http://localhost:5000/api/friends", this.state.friendData)
            .then((res) => {
                console.log('ab: AddFriendForm.js: addFriend(): res:', res);
                this.props.history.push('/friendlist')
            })
            .catch((err) => {
                console.error(err.response)
            })
    };

    pushToComponent = e => {
        e.preventDefault();

        this.props.history.push('/remove');
    }

    render() {
        return (
            <div className="form">
                
                <form onSubmit={this.addFriend}>
                    <header>
                        <h2> Add A Friend</h2>
                    </header>
                    <label htmlFor="name" className="name">
                        Name
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.friendData.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="age" className="age-label">
                        Age
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={this.state.friendData.age}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="email" className="email">
                        E-Mail
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.friendData.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button> Add Friend</button>
                </form>

                <form onSubmit={this.pushToComponent.bind(this)}>
                    <header className="footer-form-question">
                        <h5>Remove A Friend ?</h5>
                    </header>
                    <button> Yes</button>
                </form>
            </div>
        );
    }
};

export default withRouter(AddFriend);