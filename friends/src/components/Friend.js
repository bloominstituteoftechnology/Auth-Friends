import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'




export default function Friend() {

        const initialNewFriend = {
            name:'',
            age: '',
            email: ''
        }

    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState(initialNewFriend)

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleChanges = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    };

    const addNewFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => {
            setNewFriend(initialNewFriend);
            setFriends(res.data);
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='friend'>
            <h2>Add a new friend</h2>

            <form onSubmit={addNewFriend}>
                <input
                    type='text'
                    name='name'
                    value={newFriend.name}
                    onChange={handleChanges}
                    />
                
                <input
                    type='number'
                    name='age'
                    value={newFriend.age}
                    onChange={handleChanges}
                    />
                
                <input
                    type='email'
                    name='email'
                    value={newFriend.email}
                    onCHange={handleChanges}
                    />
            </form>
            <h2>Our Friends</h2>
            <div className='friendslist'>
                
                {friends.map(friend => (
                    <div key={friend.id} >
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>

            </div>
                ))}
                        
            </div>
        </div>    
    )
}
