import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const Login = ({ isLoggedIn, isLoading, login, history}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userPassCombo = { username: username, password: password };

    const processLogin = e => {
        e.preventDefault();
        console.log("User Pass Combo", userPassCombo);
        login(userPassCombo);
        history.push('/friends')
    };
    return (
        <Segment inverted>
            <Form inverted onSubmit={e => processLogin(e)}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        label="Username"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={e => {
                            e.preventDefault();
                            setUsername(e.target.value);
                        }}
                    />
                    <Form.Input
                        fluid
                        type="password"
                        label="Password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                    />
                </Form.Group>
                <Button type="submit" onSubmit={e => processLogin(e)}>
                    Submit
                </Button>
            </Form>
        </Segment>
    );
};

export default Login;
