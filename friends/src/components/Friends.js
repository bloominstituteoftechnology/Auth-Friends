import React, { useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function FriendCard ({ friend }) {

const [friendRender, setFriendRender] = useState({})

useEffect(() => {
    axiosWithAuth()
    .get('/api/friends/')
    .then(res => {
        setFriendRender(res.data)
    })
    .catch(err => {
        console.log('ERROR :', err)
    })
}, [])

    return(
        <div> 
            <p><strong>{friend.name}</strong>, {friend.age} </p>
            <p>For more weirdly personal info, contact them at {friend.email}.</p>
        </div>
    )
}