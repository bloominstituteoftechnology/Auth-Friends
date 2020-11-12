import {axiosWithAuth} from '../axiosAuth';
import {useEffect, useState} from 'react';
import AddFriend from './AddFriend';
import Friend from './Friend';

export default function List(){
    const [data, setData] = useState([])
    const getData = () =>{
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
                console.log(res.data);
                setData(res.data);
            }   
        )
    }

    useEffect(getData, []);

    return(
            <>
                <h2>List of Friends</h2>
                {data.map(a=>             
                    <Friend friend={a} up={getData}/>
                )}
                <hr></hr>
                <AddFriend up={getData} id={data.length + 1}/>
            </>

        )
}