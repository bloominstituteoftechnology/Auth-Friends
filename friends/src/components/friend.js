import React, { Component } from "react";


const Friend=(props)=> {
        return (
            <div>
                <div> ID: {props.friend.id}</div>
                <div> Name: {props.friend.name}</div>
                <div> Age: {props.friend.age}</div>
                <div> Email: {props.friend.email}</div>
                <button onClick={(event)=>props.unfriend(event,props.friend.id)}>Unfriend</button>
                <button >Update Friend</button>
            </div>
        );
  }
  
 

export default Friend;