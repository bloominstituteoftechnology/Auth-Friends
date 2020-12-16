import React, { useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'

const FriendsList = () => {

const [friend, setFriend] = useState({
    friends: []
})


    const getFriend = () => {
            axiosWithAuth()
            .get(`api/friends`)
            .then(res => {
                setFriend({
                friends: res.data
                })
            })
            .catch(err => {
                console.log('ERRROR: ', err)
            })
        }

        return(

            <div>
                {friend.friends === [] ? <h2>Fetching Friends...</h2>
                : ''}
                <button onClick={getFriend}>View Friends</button>
                {friend.friends.map(friend => (
                    <div key={friend.id}>
                    <p><strong>{friend.name}</strong>, {friend.age}. For more weirdly personal info, contact them at {friend.email}</p>
                    </div>
                ))}
                <AddFriend />
            </div>
        )
    }


export default FriendsList