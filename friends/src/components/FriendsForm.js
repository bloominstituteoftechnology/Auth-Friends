import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components';

const Body = styled.div`
margin: 5%;
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
border-top: 2px solid #282c34;
`

const Button = styled.button`
margin: 5%;
width: 35%;
background-color: #282c34;
color: white;
padding: 1%;
border-radius: 8px;
`

    const FriendsForm = props => {
        const [newFriend, setNewFriend] = useState({
            id: '',
            name: '',
            age: '',
            email:'',
        });

        const handleChange = e => {
            setNewFriend(
                {
                    ...newFriend,
                    [e.target.name]: e.target.value
                }
            );
        };

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log('success', res);
            localStorage.setItem( newFriend, res.data.payload );
            props.history.push('/myfriends');
        })
        .catch(err => console.log(err));
    };

        return (
            <Body>
                <h2>Add a New Friend</h2>
                <Form onSubmit={addFriend}>
                <p>Name:</p>
                <input
                    label="name"
                    type="text"
                    name="name"
                    placeholder="First Name, Last Name"
                    value={props.age}
                    onChange={handleChange}
                />
                <p>Age:</p>
                <input
                    label="age:"
                    type="number"
                    name="age"
                    placeholder="Age in Years"
                    value={props.age}
                    onChange={handleChange}
                />
                <p>E-Mail:</p>
                <input
                    label="email"
                    type="email"
                    name="email"
                    placeholder="example@friends.com"
                    value={props.email}
                    onChange={handleChange}
                />
                <Button>Add New Friend</Button>
                </Form>
            </Body>
            );
    };
    
    export default FriendsForm;