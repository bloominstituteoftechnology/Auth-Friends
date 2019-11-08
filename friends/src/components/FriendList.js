import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function FriendList(props) {
    const [listFriend, setListFriend] = useState([])
    
    useEffect(() => {
        api().get('/api/friends')
        .then(res => {
            console.log(res.data)
            setListFriend(res.data)
         })
         .catch(err => {
             console.log(err)
         })
    }, [])

    const handleDelete = (e, id) => {
        e.preventDefault()

        const user = listFriend.filter(friend => friend.id === id)

        if (window.confirm('Delete Friend?')) {
            setListFriend(listFriend.filter(friend => friend.id !== id))

            api().delete(`/api/friends/${id}`)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                    setListFriend([...listFriend, user])
                })
        }
    }

    return (
        <>
        {listFriend.map(friend => {
            return (
                <div className='friend-container' key={friend.id}>
                    <button onClick={(e) => handleDelete(e, friend.id)}>Delete</button>
                    <h2>{friend.name}</h2>
                </div>
            )
        })}
        </>
    )
    
}

export default FriendList;  