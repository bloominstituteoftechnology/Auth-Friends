import React, { useEffect, useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'

const Friends = () => {
    const [friends, setFriends] = useState([])
    const [isEditing, setIsEditing] = useState(false)

    const [friendToEdit, setFriendToEdit] = useState({})
    useEffect(() => { 
        axiosWithAuth().get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }, [])

    const updateFriends = newFriends => {
        setFriends(newFriends)
    }

    const deleteFriend = id => {
        axiosWithAuth().delete(`/friends/${id}`)
            .then(res => updateFriends(res.data))
    }

    const setEditFriend = friend => {
        setIsEditing(true)
        setFriendToEdit(friend)
    }
    return (
        <div>
             <h2>Add Friend</h2>
            <AddFriend setIsEditing={setIsEditing} isEditing={isEditing} friendToEdit={friendToEdit} updateFriends={updateFriends}/>
            <h2>Friends</h2>
            {friends.map(friend => {
                return <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <h5>{friend.age}</h5>
                    <h6>{friend.email}</h6>
                    <button onClick={() => deleteFriend(friend.id)}>Delete Friend</button>
                    <button onClick={() => setEditFriend(friend)}>Edit</button>
                </div>
            })}
        </div>
    )
}

export default Friends 
 