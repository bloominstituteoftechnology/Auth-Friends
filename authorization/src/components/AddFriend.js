import React, { useState } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../axiosAuth';
import Axios from 'axios';

const Container = styled.section`

    margin: 0 5%;
    border: 2px solid bold;

    form {

        display: flex;
        flex-flow: column;
        margin: 5% 0;

        input {

            margin-bottom: 3%;
        }

        button {

            background: black;
            color: white;
            border: none;
            outline: none;
            padding 4%;
            margin-top: 3%;

            &:hover {

                background: white;
                color: black;
                border: 1px solid black;
            }
        }
    }

`;

const AddFriend = (props) => {

    const [friend, setFriend] = useState({});

    const handleChange = e => {

        setFriend({
            ...friend,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {

        e.preventDefault();
        // Axios.defaults.headers.post['body'] = friend;
        console.log(friend);
        axiosWithAuth()({ url: "http://localhost:5000/api/friends",
                          method: "POST",
                          data: friend,
                          id: friend.id})
        .then(res => {
            console.log(res.data);
        })
        .catch( err => {
            console.log(err);
        })

        let count = props.update
        props.setUpdate(count++);
    }


    return (
        <Container>
           <form onSubmit={handleSubmit}>
               <input
                onChange={handleChange}
                placeholder="Add an ID"
                name="id"/>
               <input
                onChange={handleChange}
                placeholder="Add a Name"
                name="name"/>
               <input
                onChange={handleChange}
                placeholder="Add an Age"
                name="age"/>
               <input
                onChange={handleChange}
                placeholder="Add an Email"
                name="email"/>
                <button type="submit">Add Friend</button>
           </form>
        </Container>
    )
}

export default AddFriend;