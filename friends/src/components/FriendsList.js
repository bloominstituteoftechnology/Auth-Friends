import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm'

const FriendsList = () => {
    const [data , setData] = useState([])
    const[refresh, setRefresh] = useState(true)
    


    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    return(
        <>
            <h2>Add a Friend</h2>
            <AddFriendForm  refresh={refresh} setRefresh={setRefresh} />
            
            <h2>Friends</h2>
            {
                data.map(friend => (
                    <div className="friend" key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>Age:{friend.age}</p>
                        <p>Email:{friend.email}</p>

                    </div>
            
                ))
            }
        </>
    )
}

export default FriendsList