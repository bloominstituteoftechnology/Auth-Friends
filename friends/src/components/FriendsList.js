import React, { useState, useEffect } from 'react';
import axios from '../axiosAuth';

export default function FriendsList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        // Using Token.
        const token = localStorage.getItem('token');

        axios()
        .get('http://localhost:5000/api/friends')
        .then(response => {
            setList(response.data);
        })
        .catch(error => {
            alert(error);
            console.log(error);
        });
    }, []);

    return(
        <div>
            {
                list.map(friend => {
                    console.log(friend);
                return <h3 key={friend.id}><i>Name:</i> <br></br>{ friend.name } <br></br> <i>Age:</i> <br></br>{ friend.age} <br></br> <i>Email:</i> <br></br>{ friend.email }</h3>
                })

            }
            <h3>Yea dawg, here's something.</h3>
        </div>
    )
}