import React, {useState} from 'react'

export default function FriendForm() {
    const [ newFriend, setNewFriend ] = useState({
        id: "",
        name: "",
        age: "",
        email: "",
}
    )

    const handleNewFriendInput = (e)=>{
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <form>
                <label> Name:
                    <input
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleNewFriendInput}>
                    </input>
                </label>
                <br></br>
                <label> Age:
                    <input
                    type="text"
                    name="age"
                    value={newFriend.age}
                    onChange={handleNewFriendInput}>
                    </input>
                </label>
                <br></br>
                <label> Email:
                    <input
                    type="text"
                    name="email"
                    value={newFriend.email}
                    onChange={handleNewFriendInput}>
                    </input>
                </label>
            </form>
        </div>
    )
}
