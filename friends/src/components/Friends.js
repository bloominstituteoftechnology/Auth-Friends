import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


    const Friends =() =>{
      const [info, setInfo] = useState([]);


      useEffect(() => {
      axiosWithAuth()
        .get("/friends") 
        .then(res => {
        console.log("API Is Here: ", res.data); 
        setInfo(res
        .data);
        })
        .catch(error => {
        console.log("Whoops go back, thats an error!", error);
        });
      }, []);
      console.log(info);


      return (
        <section>
          {info.map(friend =>
        <div key={friend.id}>  
          <h3>Name: {friend.name}</h3>
          <h4>Age: {friend.age}</h4>
          <h5>Email: {friend.email}</h5>
          </div>
        )}

      </section>
      )
    }
    export default Friends;