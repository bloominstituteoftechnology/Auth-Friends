import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axiosWithAuth()
            .get('/api/friends')
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err))
        }, 1000)
        }, [])
    
    return (
        <div>
            <h1>Friends:</h1>
        </div>
    )
}

export default Friends
