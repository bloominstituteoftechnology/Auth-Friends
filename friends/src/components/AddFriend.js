import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './AxiosAuth';

const AddFriend = (props) => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
              setDisplay(true);
            })
            .catch(err => {
              localStorage.setItem("token", null);
            props.history.push('/login');
            });
        } else{
        props.history.push('/login');
        }
      }, []);


    return (
        <div>
            {display && "Add Friend"}
        </div>


      );
}
 
export default AddFriend;