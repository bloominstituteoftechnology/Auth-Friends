import React, { useState, useContext } from 'react';
import { Button, Form, Segment } from "semantic-ui-react";
import {DispatchContext} from '../contexts/'
import { axiosWithAuth } from "../helpers";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {dispatch} = useContext(DispatchContext);
    const userPassCombo = { username: username, password: password };

    const processLogin = e => {
        e.preventDefault();

        login(userPassCombo);
    };
    const login = (userPassCombo) => {
        dispatch({ type: 'SET_LOADING' });
        dispatch({ type: 'LOGIN_START' });
    
        axiosWithAuth()
            .post("/login", userPassCombo)
            .then(response => {
                console.log(response);
                dispatch({ type: 'SET_LOADING' });
                dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.payload });
                
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: 'SET_LOADING' });
                dispatch({ type: 'LOGIN_ERROR', payload: error });
            });
    };
    return (
        <Segment inverted>
            <Form inverted onSubmit={e => processLogin(e)}>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label='Username'
                        placeholder='Username'
                        name='username'
                        value={username}
                        onChange={e => {
                            e.preventDefault();
                            setUsername(e.target.value);
                        }}
                    />
                    <Form.Input
                        fluid
                        type='password'
                        label='Password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                    />
                </Form.Group>
                <Button type='submit' onSubmit={e => processLogin(e)}>
                    Submit
                </Button>
            </Form>
        </Segment>
    );
};

export default Login;
