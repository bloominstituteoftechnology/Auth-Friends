import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const FriendsList = () => {
    const initialNewFriend = {
        name: "",
        age: "",
        email: ""
    };
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState(initialNewFriend);
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(()=>{
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log("friends list useEffect", res)
                setFriends(res.data)
            })
            .catch(err=>console.log(err));
    }, [])

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value })

    };

    const addNewFriend = e => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth()
            .post("/friends", newFriend)
            .then(res=>{
                console.log("addnewfriend", res);
                setIsLoading(false);
                setNewFriend(initialNewFriend);
                setFriends(res.data);
            })
            .catch(err=>console.log(err))

    }

    return (
        <div>
            
            <div>
                <h2>Add a Friend</h2>
                <form onSubmit={addNewFriend}>
                    <input
                        type="text"
                        name="name"
                        value={newFriend.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                    />
                    <input
                        type="number"
                        name="age"
                        value={newFriend.age}
                        onChange={handleChange}
                        placeholder="Age"
                    />
                    <input
                        type="email"
                        name="email"
                        value={newFriend.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                    />
                    {isLoading ? 'loading...' : <button type='submit'>Add</button>}
                </form>
            </div>
            <h2>Your Friends</h2>
            <div className="friends-list">
                {friends.map(friend => (
                    <div key={friend.id} className="friend">
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default FriendsList;