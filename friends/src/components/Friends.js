import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../util/axiosWithAuth';
import FriendsCard from './FriendsCard';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({
     id: '',
     name: '',
     age: '',
     email: '',
     value: ''
    });

    const [id, setId] = useState('');

    useEffect(() => {
        const getData = () => {

            axiosWithAuth() //axiosWithAuth is a function so don't forget () to call it
            .post(`/login`, credentials) //sends info to route and double checks credentials
            .then((res) => {
                console.log(res)
                window.localStorage.setItem('token', res.data.payload); //Puts in a key called token with a value of data.payload
                props.history.push('/friends'); //Once logging in, sends them to the protected/logged in page
            })
            .catch((err) => {
                console.log('Err is: ', err);
            });
        };
        getData();
    }, []);

    const addNewFriend = friend => {
        axiosWithAuth()
        .post('/friends', 'new friend')
        .then(res => {
            console.log(res, 'new friend')
            setFriends([
                ...friends,
                friend
            ]);
        });
    };

    const addFriend = e => {
        e.preventDefault();
        addNewFriend(newFriend);
    };

    const inputChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };

}