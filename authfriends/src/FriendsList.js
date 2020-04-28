import React, {useState, useEffect} from 'react';
import axiosWithAuth from './AxiosWithAuth';
import FriendsForm from './FriendsForm';

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
                .get('/api/friends')
                .then(res => {
                    console.log(res)
                    setFriends(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    },[])
    return (
        <div>
            <h1>home page</h1>
            <FriendsForm setFriends={setFriends}/>
           {friends.map(friend => {
               return <h1 key={friend.id}>{friend.name}</h1>
           })} 
        </div>
    );
}

export default FriendsList;
