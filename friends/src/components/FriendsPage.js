import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'


export default function FriendsPage() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getFriendsData()
    }, [])

    const getFriendsData = () => {
        axiosWithAuth()
        .get(`/friends`)
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
            console.log(friends)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        
        <div>
            {
                friends.map(friend => {
                    return ( 
                    <div>
                        {/* key={friend.id} */}
                            {friend.name}<br />
                        {friend.age}<br />
                        {friend.email} </div>
                    )
                })
            }
        </div>
    )
}
