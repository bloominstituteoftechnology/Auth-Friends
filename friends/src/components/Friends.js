import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Friends = (props) => {
    const [friendsList, setFriendsList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err.response));
    }, []);

    return (
        <div>
            <h2>Friends</h2>
        </div>
    );
};

export default Friends;