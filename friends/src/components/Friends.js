import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = () => {
    const [friends, setFriends] = useState([])
    return (
        <h1>Friends</h1>
    );
};

export default Friends;