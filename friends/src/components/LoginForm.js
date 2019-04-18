import React, { Component } from 'react';
import { Card, Flex } from 'rebass';

export default class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleLogin(this.state);
        this.setState({ username: '', password: '' });
    };

    render() {
        return (
            <Flex>
                <Card width={[256, 320]} mx="auto" p={2} variant="basic">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Enter Username"
                        />
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Enter Password"
                        />
                        <button type="submit">Login</button>
                    </form>
                </Card>
            </Flex>
        );
    }
}
