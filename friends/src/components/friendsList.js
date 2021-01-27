import axios from 'axios'
import React , {useState, useEffect} from 'react'
import friendCard from '../components/friendsCard'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const initialStateValue = []

export default function FriendList () {

const [friends, setFriends] = useState(initialStateValue)

const getFriends = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then((res) => {
        console.log('res data from GET,',res.data)
        setFriends(res.data)
    })
    .catch((err) => {
        console.log('this is err from get in list', err)
    })
 }

 useEffect(() => {
     getFriends()
 }, [])

    return(
        <div className='friends-list'>
            <h2>Friends List :)</h2>
            
        </div>
    )
}