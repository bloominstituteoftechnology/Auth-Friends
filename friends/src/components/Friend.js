import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';

const Friend = () => {
    const [friend, setFriend]= useState([]);
    const {id} = useParams();

    useEffect(() => {
        axiosWithAuth()
        .get(`/${id}`)
        .then((res) => {
        console.log('Friend useEffect res', res);
        setFriend(res.data);
        })
        .catch((err) =>{
            console.log('friend useEffect err', err);
        })
    },[]);

    return(
        <div>
            <h1>{friend.name}</h1>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    );
};

export default Friend;