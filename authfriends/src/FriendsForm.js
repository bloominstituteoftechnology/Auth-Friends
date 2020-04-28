import React from 'react';
import useInput from './useInput';
import axiosWithAuth from './AxiosWithAuth';
import useForm from 'react-hook-form'

const FriendsForm = (props) => {
    const [name,setName,handleName] = useInput('')
    const [age,setAge,handleAge] = useInput('')
    const [email,setEmail,handleEmail] = useInput('')

    const handleSubmit = e => {
        e.preventDefault()
        const friend = {
            id: Date.now(),
            name: name,
            age: Number(age),
            email: email
        }

        axiosWithAuth()
                .post('/api/friends',friend)
                .then(res => {
                    props.setFriends(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        
    }

    return (
        <div>
            <form on onSubmit={handleSubmit}>
                <label>name</label>
                <input type="text" name="name" value={name} onChange={e => handleName(e.target.value)}></input>
                <label>age</label>
                <input type="text" name="age" value={age} onChange={e => handleAge(e.target.value)}></input>
                <label>email</label>
                <input type="text" name="email" value={email} onChange={e => handleEmail(e.target.value)}></input>
                <button type="submit">add friend</button>
            </form>
        </div>
    );
}

export default FriendsForm;
