import React, { useState, useEffect } from 'react';
import axios from '../axiosAuth';

export default function FriendsList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem('token');

        axios().get('http://localhost:5000/api/friends')
        .then(response => {
            setList(response.data);
        })
        .catch(error => {
            alert('There is an error.');
        });
    }, []);


    return(
        <div>
            {
                list.map(friend => {
                    <li key={friend.id}>{friend}</li>
                })
            }
            <h3>Yea dawg, here's something.</h3>
        </div>
    )
}