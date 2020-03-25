import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const List = (props) => {

    const [friends, setFriends] = useState([]);

    useEffect(()=> {
        const getFriends= () => {
            axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                console.log("Friends List", response.data)
                setFriends(response.data)
            })
            .catch(error=> {console.log("Friends Error", error)})
        }
        getFriends();
    }, [])

    console.log("Axios PALS",friends)


    return (
        <div>
            {friends.map(pal => (
              <div key={pal.id}>
                  <h1>HI</h1>
                  <h2>Name: {pal.name}</h2>
                  <h2>Email: {pal.email}</h2>
                  <h3>Age: {pal.age}</h3>
                  <br/>
              </div>
            ))}
        </div>
    )
}

export default List 


