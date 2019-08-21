import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils';
import {Link} from 'react-router-dom';
import Friend from './Friend';

const Friends = () => {

    const [friends, setFriends] = useState([])


    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data);
            console.log(friends)
        })
        .catch(err => {console.log('an error was found in your data fetch, sire: ', err)})
    }, [])
   
        
    
    return (
        <>
            <div className="friend-container">
            {friends.length > 1 ? friends.map(friend => <Friend friend={friend}/>) : null}
            </div>
            <h4>not enough friends?</h4>
            <Link to="/protected-add">Add more!</Link>
        </>
    )
}

export default Friends