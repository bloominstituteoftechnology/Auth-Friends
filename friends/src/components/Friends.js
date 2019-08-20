import React, {useState} from 'react';
import { axiosWithAuth } from '../utils';
import Friend from './Friend'

const Friends = () => {
    const [friends, setFriends] = useState([])

    const getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/data')
        .then(res => {
            console.log(res.data);
            setFriends([...friends, res.data]);
        })
        .catch(err => {'an error was found in your data fetch, sire: ',err})
    }
    
    return (
        <>
            <button onClick={getData}>Get you some Friend Data</button>
            <div className="friend-container">
            {friends && friends.map(friend => <Friend friend={friend}/>)}
            </div>
            <h4>not enough friends?</h4>
            <Link to="/add-friend">Add more!</Link>
        </>
    )
}

export default Friends