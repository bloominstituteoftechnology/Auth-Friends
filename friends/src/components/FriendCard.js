import React,{useState} from "react";

const FriendCard = ({ name , age , email , id, deleteFriend , onSubmit}) =>{
    const [editName, setEditName] = useState(name);
    const [editAge, setEditAge] = useState(age);
    const [editEmail, setEditEmail] = useState(email);

    const onNameChange = (e) =>{
        setEditName(e.target.value);
    }

    const onAgeChange = (e) =>{
        setEditAge(e.target.value);
    }
    const onEmailChange = (e) =>{
        setEditEmail(e.target.value);
    }

    const onSubmitEdit = ()=>{
        const editFriend = {name:editName,age:editAge,email:editEmail }
        setEditName('');
        setEditAge('');
        setEditEmail('');
        onSubmit(id, editFriend);
    }
    return(
        <div className="friend">
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
            <form>
                <label>
                    <p>Name:</p>
                    <input name="name" value={editName} onChange={onNameChange}/>
                </label>
                <label>
                    <p>Age:</p>
                    <input name="age" value={editAge} onChange={onAgeChange}/>
                </label>
                <label>
                    <p>Email:</p>
                    <input name="email" value={editEmail} onChange={onEmailChange}/>
                </label>
                <button onClick={onSubmitEdit}>Edit Friend</button>
            </form>
            <button onClick={()=>{deleteFriend(id)}}>Delete Friend</button>
        </div>
    )
}

export default FriendCard;