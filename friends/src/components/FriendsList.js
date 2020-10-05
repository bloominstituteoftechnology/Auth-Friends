import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../api/axiousWithAuth';

const FriendsList = () => {
    const [data,setData] = useState([]);
    const getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        
        })
    }
    useEffect(() => {
        getData();
        console.log(data);
    }, []);
    return(
        <div>
            <h2>Friends List:</h2>
            {data.map((friends) => (
                <h3>Name:{friends.name}</h3>
            ))}
        </div>
    )
}

export default FriendsList;