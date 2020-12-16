import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import NavBar from '../Components/NavBar'
import Loader from 'react-loader-spinner'
import axios from 'axios'

const Friends = () => {
    const [formData, setFormData] = useState('')
    const [friendList, setFriendList]=useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriendList(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', formData)
            .then(res => {
                setFormData(...friendList, {name: res.data})
            })
    }

    const handleChange = (e) => {
        setFormData({name: e.target.value})
    }

    if (loading) {
        return  (
        <div>
            <NavBar/>
            <form>
                <input onChange={handleChange} value={formData} type='text' placeholder='name' disabled='true'/>
                <button disabled='true'>Add</button>
            </form> <br/>
            <Loader type="Puff" color="#204963" height="60" width="60" />
        </div>
        )
    }

    return (
        <div> 
            <NavBar/>
            <form>
                <input type='text' placeholder='name'/>
                <button onClick={handleClick}>Add</button>
            </form>  
            {friendList.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>
    )

}

export default Friends;
