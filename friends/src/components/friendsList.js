import React , {useState, useEffect} from 'react'
import Addfriend from './addFriend'
import FriendCard from '../components/friendsCard'
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

//in return AddFriend is my form so thats first then comes the map under my form to showcase the friends inside the array already!
    return(
        <div className='friends-list'>
                <Addfriend /> 
                <h2>Friends:</h2>
                <div className='array-friends'>
                {friends.map(friend => {
                    return <FriendCard friend={friend} />
                })}
                </div>
        
        </div>
    )
}